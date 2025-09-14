import { NextRequest, NextResponse } from 'next/server'

// Strava API configuration
const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET
const STRAVA_ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN

interface StravaActivity {
  id: number
  name: string
  distance: number
  moving_time: number
  start_date: string
  type: string
  average_speed: number
  total_elevation_gain: number
  start_latlng?: [number, number]
  end_latlng?: [number, number]
}

export async function GET(request: NextRequest) {
  try {
    // Check if we have the necessary environment variables
    if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Strava API credentials not configured' },
        { status: 500 }
      )
    }

    // If no access token is provided, return empty data to trigger mock data fallback
    if (!STRAVA_ACCESS_TOKEN) {
      return NextResponse.json({
        activities: [],
        total: 0,
        message: 'No Strava credentials configured - using mock data'
      })
    }

    // Fetch activities from Strava API
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        'Authorization': `Bearer ${STRAVA_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Strava API error: ${response.status} ${response.statusText}`)
    }

    const activities: StravaActivity[] = await response.json()

    // Filter and format activities
    const formattedActivities = activities
      .filter(activity => ['Run', 'Ride', 'Walk', 'Hike'].includes(activity.type))
      .map(activity => ({
        id: activity.id,
        name: activity.name,
        distance: activity.distance,
        moving_time: activity.moving_time,
        start_date: activity.start_date,
        type: activity.type,
        average_speed: activity.average_speed,
        total_elevation_gain: activity.total_elevation_gain,
        start_latlng: activity.start_latlng,
        end_latlng: activity.end_latlng
      }))

    return NextResponse.json({
      activities: formattedActivities,
      total: formattedActivities.length
    })

  } catch (error) {
    console.error('Error fetching Strava data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Strava data' },
      { status: 500 }
    )
  }
}

// OAuth callback handler (for future implementation)
export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code is required' },
        { status: 400 }
      )
    }

    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code'
      })
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token')
    }

    const tokenData = await tokenResponse.json()

    return NextResponse.json({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
      expires_at: tokenData.expires_at
    })

  } catch (error) {
    console.error('Error in OAuth callback:', error)
    return NextResponse.json(
      { error: 'OAuth callback failed' },
      { status: 500 }
    )
  }
}

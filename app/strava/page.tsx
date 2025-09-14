'use client'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ExternalLinkIcon, CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react'
import Link from 'next/link'

interface StravaActivity {
  id: number
  name: string
  distance: number // in meters
  moving_time: number // in seconds
  start_date: string
  type: string
  average_speed: number // in m/s
  total_elevation_gain: number // in meters
  start_latlng?: [number, number]
  end_latlng?: [number, number]
}

interface StravaStats {
  total_distance: number
  total_time: number
  total_activities: number
  average_distance: number
  activities_this_month: number
}

// Simple SVG-based line chart component
function DistanceChart({ activities }: { activities: StravaActivity[] }) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 300 })
  
  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById('chart-container')
      if (container) {
        setDimensions({
          width: Math.min(800, container.offsetWidth - 40),
          height: 300
        })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (activities.length === 0) return null

  // Process data for the last 30 days
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  
  const recentActivities = activities
    .filter(activity => new Date(activity.start_date) >= thirtyDaysAgo)
    .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())

  if (recentActivities.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-zinc-500">
        <p>No activities in the last 30 days</p>
      </div>
    )
  }

  // Create data points for each day
  const dataPoints = []
  for (let i = 0; i < 30; i++) {
    const date = new Date(thirtyDaysAgo.getTime() + i * 24 * 60 * 60 * 1000)
    const dayActivities = recentActivities.filter(activity => {
      const activityDate = new Date(activity.start_date)
      return activityDate.toDateString() === date.toDateString()
    })
    
    const totalDistance = dayActivities.reduce((sum, activity) => sum + activity.distance, 0)
    dataPoints.push({
      date,
      distance: totalDistance / 1000, // Convert to km
      activities: dayActivities.length
    })
  }

  const maxDistance = Math.max(...dataPoints.map(d => d.distance))
  const padding = 40
  const chartWidth = dimensions.width - padding * 2
  const chartHeight = dimensions.height - padding * 2

  // Generate path for the line
  const pathData = dataPoints
    .map((point, index) => {
      const x = padding + (index / (dataPoints.length - 1)) * chartWidth
      const y = padding + chartHeight - (point.distance / maxDistance) * chartHeight
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  // Generate area path (for fill)
  const areaPathData = `${pathData} L ${padding + chartWidth} ${padding + chartHeight} L ${padding} ${padding + chartHeight} Z`

  return (
    <div id="chart-container" className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-zinc-900 mb-2">Distance (km) - Last 30 Days</h3>
        <p className="text-sm text-black">
          Total: {dataPoints.reduce((sum, d) => sum + d.distance, 0).toFixed(1)} km across {recentActivities.length} activities
        </p>
      </div>
      
      <svg width={dimensions.width} height={dimensions.height} className="w-full">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1={padding}
            y1={padding + ratio * chartHeight}
            x2={padding + chartWidth}
            y2={padding + ratio * chartHeight}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        
        {/* Area fill */}
        <path
          d={areaPathData}
          fill="url(#gradient)"
          opacity={0.3}
        />
        
        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke="#0047FF"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {dataPoints.map((point, index) => {
          const x = padding + (index / (dataPoints.length - 1)) * chartWidth
          const y = padding + chartHeight - (point.distance / maxDistance) * chartHeight
          
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={point.distance > 0 ? 4 : 0}
              fill="#0047FF"
              className="hover:r-6 transition-all cursor-pointer"
            >
              <title>
                {point.date.toLocaleDateString()}: {point.distance.toFixed(1)} km
                {point.activities > 0 && ` (${point.activities} activities)`}
              </title>
            </circle>
          )
        })}
        
        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <text
            key={ratio}
            x={padding - 10}
            y={padding + ratio * chartHeight + 4}
            textAnchor="end"
            className="text-xs fill-zinc-500"
          >
            {(maxDistance * (1 - ratio)).toFixed(1)}
          </text>
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0047FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0047FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Activity card component
function ActivityCard({ activity }: { activity: StravaActivity }) {
  const formatDistance = (meters: number) => {
    if (meters >= 1000) {
      return `${(meters / 1000).toFixed(1)} km`
    }
    return `${meters.toFixed(0)} m`
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:00`
    }
    return `${minutes}:00`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-50 rounded-lg p-4 border border-zinc-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-zinc-900">{activity.name}</h4>
        <span className="text-xs text-zinc-500 bg-zinc-200 px-2 py-1 rounded">
          {activity.type}
        </span>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-black mb-2">
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-3 w-3" />
          {formatDistance(activity.distance)}
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="h-3 w-3" />
          {formatTime(activity.moving_time)}
        </div>
        {activity.total_elevation_gain > 0 && (
          <div className="flex items-center gap-1">
            <span>↗</span>
            {activity.total_elevation_gain.toFixed(0)}m
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-1 text-xs text-zinc-500">
        <CalendarIcon className="h-3 w-3" />
        {formatDate(activity.start_date)}
      </div>
    </motion.div>
  )
}

export default function StravaPage() {
  const [activities, setActivities] = useState<StravaActivity[]>([])
  const [stats, setStats] = useState<StravaStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Hide navigation and header for Strava page
  useEffect(() => {
    const nav = document.querySelector('nav')
    const header = document.querySelector('#home')
    const footer = document.querySelector('footer')
    
    if (nav) nav.style.display = 'none'
    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'
    
    // Cleanup function to restore elements when leaving the page
    return () => {
      if (nav) nav.style.display = ''
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  useEffect(() => {
    const fetchStravaData = async () => {
      try {
        setLoading(true)
        
        // Try to fetch real data from the API first
        const response = await fetch('/api/strava')
        const data = await response.json()
        
        if (response.ok && data.activities) {
          // Use real Strava data
          setActivities(data.activities)
          
          // Calculate stats from real data
          const totalDistance = data.activities.reduce((sum: number, activity: StravaActivity) => sum + activity.distance, 0)
          const totalTime = data.activities.reduce((sum: number, activity: StravaActivity) => sum + activity.moving_time, 0)
          const thisMonth = data.activities.filter((activity: StravaActivity) => {
            const activityDate = new Date(activity.start_date)
            const now = new Date()
            return activityDate.getMonth() === now.getMonth() && activityDate.getFullYear() === now.getFullYear()
          })

          setStats({
            total_distance: totalDistance,
            total_time: totalTime,
            total_activities: data.activities.length,
            average_distance: totalDistance / data.activities.length,
            activities_this_month: thisMonth.length
          })
          
          setLoading(false)
          return
        }
        
        // No API key configured - show empty state
        setActivities([])
        setStats(null)

      } catch (err) {
        setError('Failed to load Strava data')
        console.error('Error fetching Strava data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStravaData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#FBFBF8]">
        <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-black hover:text-zinc-900">
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
            Strava Activities
          </h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-zinc-500">Loading activities...</div>
        </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-[#FBFBF8]">
        <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-black hover:text-zinc-900">
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
            Strava Activities
          </h1>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-red-500">{error}</div>
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#FBFBF8]">
      <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-black hover:text-zinc-900">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
          Strava Activities
        </h1>
        <a
          href="https://www.strava.com/athletes/31667606"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-black hover:text-zinc-900"
        >
          <ExternalLinkIcon className="h-5 w-5" />
        </a>
      </div>

      {/* API Key Not Connected Message */}
      {!stats && activities.length === 0 && (
        <div className="bg-zinc-50 rounded-lg p-8 border border-zinc-200 text-center">
          <div className="text-6xl mb-4">🔑</div>
          <h2 className="text-xl font-medium text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
            Strava API Key Not Connected
          </h2>
          <p className="text-black mb-4">
            To view your Strava activities and statistics, you need to configure your Strava API credentials.
          </p>
          <p className="text-sm text-zinc-500">
            Check the setup instructions in the{' '}
            <a 
              href="/STRAVA_SETUP.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              STRAVA_SETUP.md
            </a>{' '}
            file to connect your Strava account.
          </p>
        </div>
      )}

      {/* Stats Cards - Only show when data is available */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
            <div className="text-2xl font-bold text-zinc-900">
              {(stats.total_distance / 1000).toFixed(1)}
            </div>
            <div className="text-sm text-black">Total Distance (km)</div>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
            <div className="text-2xl font-bold text-zinc-900">
              {Math.floor(stats.total_time / 3600)}
            </div>
            <div className="text-sm text-black">Total Time (hours)</div>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
            <div className="text-2xl font-bold text-zinc-900">
              {stats.total_activities}
            </div>
            <div className="text-sm text-black">Total Activities</div>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
            <div className="text-2xl font-bold text-zinc-900">
              {(stats.average_distance / 1000).toFixed(1)}
            </div>
            <div className="text-sm text-black">Avg Distance (km)</div>
          </div>
        </div>
      )}

      {/* Chart - Only show when data is available */}
      {activities.length > 0 && (
        <div className="bg-white rounded-lg p-6 border border-zinc-200 mb-8">
          <DistanceChart activities={activities} />
        </div>
      )}

      {/* Recent Activities - Only show when data is available */}
      {activities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium text-zinc-900 mb-4" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
            Recent Activities
          </h2>
          <div className="grid gap-4">
            {activities.slice(0, 10).map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      )}

      </div>
    </div>
  )
}
# Strava Integration Setup

This document explains how to set up Strava API integration for the personal website.

## Overview

The Strava page (`/strava`) displays your running, cycling, and other activity data with a beautiful distance-over-time visualization. Currently, it shows mock data, but you can connect it to your real Strava data.

## Setup Instructions

### 1. Create a Strava Application

1. Go to [Strava API Settings](https://www.strava.com/settings/api)
2. Click "Create App" or "My API Application"
3. Fill in the required information:
   - **Application Name**: Your website name (e.g., "Personal Website")
   - **Category**: Choose appropriate category
   - **Club**: Leave blank unless you want to associate with a club
   - **Website**: Your website URL
   - **Authorization Callback Domain**: Your domain (e.g., `yourdomain.com`)

### 2. Get Your Credentials

After creating the app, you'll get:
- **Client ID**: A numeric ID
- **Client Secret**: A string secret

### 3. Get an Access Token

#### Option A: Manual Token Generation (Recommended for personal use)

1. Go to the authorization URL:
   ```
   https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost&approval_prompt=force&scope=read,activity:read_all
   ```
   Replace `YOUR_CLIENT_ID` with your actual client ID.

2. Authorize the application and copy the `code` parameter from the redirect URL.

3. Exchange the code for an access token:
   ```bash
   curl -X POST https://www.strava.com/oauth/token \
     -F client_id=YOUR_CLIENT_ID \
     -F client_secret=YOUR_CLIENT_SECRET \
     -F code=YOUR_CODE \
     -F grant_type=authorization_code
   ```

4. Save the `access_token` from the response.

#### Option B: Use Postman or similar tool

1. Create a POST request to `https://www.strava.com/oauth/token`
2. Use form-data with the same parameters as above
3. Extract the access token from the response

### 4. Configure Environment Variables

Add these to your `.env.local` file:

```env
STRAVA_CLIENT_ID=your_client_id_here
STRAVA_CLIENT_SECRET=your_client_secret_here
STRAVA_ACCESS_TOKEN=your_access_token_here
```

### 5. Update the Strava Page

The Strava page is already set up to use the API. Once you add the environment variables, it will automatically fetch your real data instead of showing mock data.

## API Endpoints

### GET `/api/strava`

Fetches your Strava activities. Returns:
- `activities`: Array of activity objects
- `total`: Total number of activities

### POST `/api/strava`

Handles OAuth callback (for future implementation).

## Features

- **Distance Visualization**: Interactive chart showing daily distance over the last 30 days
- **Activity Stats**: Total distance, time, activities, and averages
- **Recent Activities**: List of your most recent activities with details
- **Responsive Design**: Works on desktop and mobile
- **Activity Types**: Supports Run, Ride, Walk, and Hike activities

## Customization

### Chart Styling

The chart uses SVG and can be customized in the `DistanceChart` component:
- Colors: Modify the `stroke` and `fill` attributes
- Dimensions: Adjust the `dimensions` state
- Data range: Change the 30-day filter

### Activity Filtering

To show different activity types, modify the filter in the API route:
```typescript
.filter(activity => ['Run', 'Ride', 'Walk', 'Hike'].includes(activity.type))
```

### Stats Calculation

Stats are calculated in the `useEffect` hook of the Strava page component. You can modify:
- Time periods (currently shows last 30 days)
- Activity types included
- Calculation methods

## Troubleshooting

### Common Issues

1. **"Strava API credentials not configured"**
   - Make sure all environment variables are set
   - Restart your development server after adding env vars

2. **"No access token configured"**
   - Follow the token generation steps above
   - Make sure the token is valid and not expired

3. **"Strava API error: 401"**
   - Your access token may be expired
   - Generate a new token using the same process

4. **"Strava API error: 403"**
   - Check your app permissions
   - Make sure you've authorized the application

### Token Refresh

Strava access tokens expire. You'll need to:
1. Generate a new token when the current one expires
2. Update the `STRAVA_ACCESS_TOKEN` environment variable
3. Restart your application

For production use, consider implementing automatic token refresh using the refresh token.

## Security Notes

- Never commit your Strava credentials to version control
- Use environment variables for all sensitive data
- Consider implementing proper OAuth flow for production
- Rate limit your API calls to avoid hitting Strava's limits

## Rate Limits

Strava API has rate limits:
- 100 requests per 15 minutes
- 1,000 requests per day

The current implementation fetches all activities at once, which should be well within these limits for personal use.

## Future Enhancements

Potential improvements:
- Automatic token refresh
- More detailed activity analysis
- Goal tracking and progress visualization
- Integration with other fitness platforms
- Export functionality
- Social features (following other athletes)


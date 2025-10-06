# Egyptian Food QR Generator
## Global Shapers Tanta Hub Initiative

A modern web application for generating QR codes for Egyptian traditional food dishes with Instagram integration and detailed analytics tracking. This project promotes Egyptian culinary heritage through digital innovation as part of Global Shapers Tanta Hub's community initiatives.

## 🎯 Mission

Connecting Egyptian traditional cuisine with the digital world to preserve our rich culinary heritage and support local food culture through innovative QR code technology.

## ✨ Features

- 🍽️ **Food Upload**: Upload images of Egyptian traditional dishes with descriptions
- 📱 **QR Code Generation**: Automatic QR code generation with Global Shapers branding
- 📊 **Analytics Dashboard**: Track QR code scans and community engagement
- 📸 **Instagram Integration**: Direct QR code scans to specific Instagram posts
- ☁️ **Free Cloud Storage**: Images stored on Vercel Blob (free tier)
- 📈 **Real-time Tracking**: Monitor scan counts and user engagement
- 🎨 **Global Shapers Branding**: Designed with official Global Shapers color scheme
- 🇪🇬 **Egyptian Heritage Focus**: Specially designed for traditional Egyptian cuisine

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Vercel Postgres (free tier)
- **Image Storage**: Vercel Blob Storage (free tier)
- **QR Generation**: QRCode.js
- **Deployment**: Vercel (100% free deployment)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Vercel account (free)
- No additional services needed - everything runs on Vercel's free tier!

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd egyptian-food-qr-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. For development, you only need:
```env
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel (100% Free)

### Step 1: Prepare Your Repository
1. Push your code to GitHub/GitLab/Bitbucket

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login
2. Import your repository
3. Vercel will automatically detect it's a Next.js project

### Step 3: Add Vercel Postgres (Free)
1. In your Vercel project dashboard, go to "Storage"
2. Create a new "Postgres" database (free tier: 60GB, 1000 rows)
3. Vercel will automatically add these environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL` 
   - `POSTGRES_URL_NO_SSL`
   - `POSTGRES_URL_NON_POOLING`

### Step 4: Add Vercel Blob Storage (Free)
1. In "Storage", create a new "Blob" storage (free tier: 1TB bandwidth)
2. Vercel will automatically add:
   - `BLOB_READ_WRITE_TOKEN`

### Step 5: Add Custom Environment Variables
Add these in Vercel dashboard → Settings → Environment Variables:
```env
NEXTAUTH_SECRET=your_secret_key_here_generate_random_string
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

### Step 6: Initialize Database
1. After deployment, visit: `https://your-app-name.vercel.app/api/setup`
2. This will create the required database tables
3. You should see: `{"message":"Database initialized successfully"}`

### Step 7: Ready to Use!
Your Egyptian Food QR Generator is now live and ready to use! 🎉

## How It Works

1. **Upload Food**: Add Egyptian traditional food with image and Instagram post URL
2. **QR Generation**: System generates unique QR code with tracking URL
3. **Scan Tracking**: When QR is scanned, system records analytics data
4. **Instagram Redirect**: Users are redirected to your Instagram post
5. **Analytics**: View detailed statistics on your dashboard

## API Endpoints

- `POST /api/upload-food` - Upload new food item with image
- `GET /api/foods` - Get all food items
- `GET /api/analytics` - Get analytics data
- `GET /track/[id]` - QR code tracking and redirect endpoint

## 🗄️ Database Schema

### Foods Table
```sql
CREATE TABLE foods (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  instagram_url VARCHAR(500) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  qr_code_url VARCHAR(500) NOT NULL,
  tracking_url VARCHAR(500) NOT NULL,
  scan_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Scans Table
```sql
CREATE TABLE scans (
  id SERIAL PRIMARY KEY,
  food_id INTEGER REFERENCES foods(id) ON DELETE CASCADE,
  scanned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent TEXT
);
```

## 🎨 Global Shapers Branding

The application uses official Global Shapers colors and design principles:
- **Primary Blue**: `#0284c7` - Global Shapers signature color
- **Secondary Yellow**: `#eab308` - Accent color for highlights
- **Egyptian Gold**: `#c8aa6e` - Honoring Egyptian heritage

### Features Overview

### 📱 Upload Interface
- Clean, intuitive form for adding Egyptian food items
- Image upload with Vercel Blob storage integration
- Metadata fields for food description and Instagram URL
- Global Shapers branded design

### 📊 Analytics Dashboard
- Total scans and QR codes overview with Global Shapers styling
- Individual food performance metrics
- Recent scan activity log
- Download QR codes functionality
- Egyptian heritage theme integration

### 🎯 QR Code System
- Unique tracking URLs for each food item
- Automatic scan counting and analytics
- Seamless Instagram redirection
- Print-ready QR code downloads with Global Shapers branding
- Custom QR codes in Global Shapers blue

## 🛠️ Customization for Other Hubs

Other Global Shapers Hubs can easily customize this application:

1. **Update Branding**: Modify `tailwind.config.js` for local hub colors
2. **Change Content**: Update text in `app/page.tsx` and `app/layout.tsx`
3. **Add Features**: Implement user authentication, more analytics
4. **Localization**: Add support for local languages
5. **Food Categories**: Expand beyond Egyptian food to local cuisine

### Quick Hub Customization
```javascript
// In tailwind.config.js - change these colors
primary: {
  600: '#your-hub-primary-color',
  // ... other shades
},
secondary: {
  500: '#your-hub-secondary-color',
  // ... other shades
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email your-email@example.com or create an issue in this repository.
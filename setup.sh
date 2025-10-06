#!/bin/bash

# Egyptian Food QR Generator - Quick Setup Script
# Global Shapers Tanta Hub Initiative

echo "🇪🇬 Egyptian Food QR Generator Setup"
echo "Global Shapers Tanta Hub Initiative"
echo "======================================"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
echo "⚙️ Setting up environment..."
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    echo "✅ Created .env.local file"
    echo "🔧 Please edit .env.local with your configuration"
else
    echo "⚠️ .env.local already exists"
fi

echo ""
echo "🚀 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your configuration"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:3000"
echo "4. Deploy to Vercel when ready!"
echo ""
echo "For deployment help, see README.md"
echo "Happy coding! 🎉"
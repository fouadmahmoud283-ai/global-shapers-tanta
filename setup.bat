@echo off
echo 🇪🇬 Egyptian Food QR Generator Setup
echo Global Shapers Tanta Hub Initiative
echo ======================================

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file
echo ⚙️ Setting up environment...
if not exist .env.local (
    copy .env.local.example .env.local
    echo ✅ Created .env.local file
    echo 🔧 Please edit .env.local with your configuration
) else (
    echo ⚠️ .env.local already exists
)

echo.
echo 🚀 Setup Complete!
echo.
echo Next steps:
echo 1. Edit .env.local with your configuration
echo 2. Run 'npm run dev' to start development server
echo 3. Visit http://localhost:3000
echo 4. Deploy to Vercel when ready!
echo.
echo For deployment help, see README.md
echo Happy coding! 🎉

pause
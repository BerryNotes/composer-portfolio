@echo off
REM ============================================================
REM  PUBLISH YOUR SITE  (Cloudflare Pages)
REM  After editing your text (e.g. src\content\about.md),
REM  just double-click this file to put the changes live at
REM  https://peter-vasilik.pages.dev
REM ============================================================
cd /d "%~dp0"

echo.
echo Saving your changes...
echo.

git add -A
git commit -m "Edit site content"
git push origin main

echo.
echo Building the site...
echo.

call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED - your changes were saved but not published.
  echo Ask Claude to take a look.
  pause
  exit /b 1
)

echo.
echo Deploying to Cloudflare Pages (about a minute)...
echo.

call npx wrangler pages deploy out --project-name peter-vasilik --commit-dirty=true

echo.
echo ============================================================
echo  Done. Your site is live at https://peter-vasilik.pages.dev
echo ============================================================
echo.
pause


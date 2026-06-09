@echo off
REM ============================================================
REM  PUBLISH YOUR SITE
REM  After editing your text (e.g. src\content\about.ts),
REM  just double-click this file to put the changes live.
REM ============================================================
cd /d "%~dp0"

echo.
echo Saving and publishing your changes...
echo.

git add -A
git commit -m "Edit site content"
git push origin main

echo.
echo Deploying to the web (this takes about a minute)...
echo.

call vercel deploy --prod --yes

echo.
echo ============================================================
echo  Done. Your site is live at composer-portfolio-one.vercel.app
echo ============================================================
echo.
pause

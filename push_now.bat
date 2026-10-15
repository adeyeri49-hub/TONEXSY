@echo off
set "PATH=C:\Users\quick\AppData\Local\Programs\Git\cmd;%PATH%"
cd /d "C:\Users\quick\.gemini\antigravity\scratch\forge-games"
echo ========================================================
echo   FORGE GAMES - Pushing to github.com/adeyeri49-hub/TONEXSY
echo ========================================================
echo.
git remote remove origin 2>nul
git remote add origin https://github.com/adeyeri49-hub/TONEXSY.git
git branch -M main
echo Pushing branch 'main' to GitHub...
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo ========================================================
    echo Refresh your GitHub page: https://github.com/adeyeri49-hub/TONEXSY
) else (
    echo.
    echo If push failed, check authorization and press any key to retry.
)
echo.
pause

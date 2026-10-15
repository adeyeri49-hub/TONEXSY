@echo off
set "PATH=C:\Users\quick\AppData\Local\Programs\Git\cmd;%PATH%"

if "%~1"=="" (
    echo [ERROR] Please provide your GitHub repository URL.
    echo Usage: push_to_git.bat https://github.com/YOUR_USERNAME/YOUR_REPO.git
    pause
    exit /b 1
)

echo Adding remote origin %1...
git remote remove origin 2>nul
git remote add origin %1
git branch -M main

echo Pushing to remote...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo [SUCCESS] Code successfully pushed to GitHub!
) else (
    echo.
    echo [NOTICE] If GitHub asked for sign in, please complete the browser sign-in prompt.
)
pause

@echo off
set "PATH=C:\Users\quick\AppData\Local\Programs\Git\cmd;%PATH%"
git --version
git init -b main
git config user.name "Quick"
git config user.email "quick@example.com"
git add .
git commit -m "Initial commit: Forge Games Atelier website with Forge Automotive animation engine"
git log -1
git status

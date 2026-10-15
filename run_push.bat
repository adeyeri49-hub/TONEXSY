@echo off
set "PATH=C:\Users\quick\AppData\Local\Programs\Git\cmd;%PATH%"
git remote remove origin 2>nul
git remote add origin https://github.com/adeyeri49-hub/TONEXSY.git
git branch -M main
git push -u origin main

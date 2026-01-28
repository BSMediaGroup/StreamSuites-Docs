@echo off
title StreamSuites Docs — Clean Build

cd /d "C:\NEPTUNE LOCAL\GIT\StreamSuites-Docs"

npm install
npm run build

pause

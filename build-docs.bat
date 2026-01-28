@echo off
title StreamSuites Docs — Build

REM === CHANGE THIS PATH IF NEEDED ===
cd /d "C:\NEPTUNE LOCAL\GIT\StreamSuites-Docs"

echo.
echo ===============================
echo Running npm run build
echo ===============================
echo.

npm run build

echo.
echo ===============================
echo Build finished.
echo Press any key to close.
echo ===============================
pause >nul

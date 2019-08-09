@echo off
start powershell -NoProfile -Command "& {Start-Process Powershell.exe -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File "\\DR0-HLP-06\PCIDashboard\PCIScripts\PCIDashboard.ps1"' -Verb RunAs}"
exit
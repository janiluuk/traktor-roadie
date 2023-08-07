@echo off
set /p "controller_type=Please enter your Native Instruments DJ controller type (S4, S5, S8, D2, None): "

if "%controller_type%"=="None" (
    set "controller_type=D2"
)

set "default_dir=C:\Program Files\Native Instruments\Traktor 3\Resources64\qml\CSI"
set "target_dir=%default_dir%"

:dir_check
if not exist "%target_dir%" (
    set /p "target_dir=Directory %target_dir% not found. Please enter the correct directory path: "
    goto dir_check
)

set "backup_dir=%target_dir%_backup"

xcopy /E /I "%target_dir%" "%backup_dir%"
xcopy /E /I "<path-to-api-folder>" "%target_dir%\Api"
copy /Y "<path-to-api-folder>\%controller_type%.qml" "%target_dir%"

echo You can open Traktor now:
echo     Go to Preferences > Controller Manager
echo     Below the Device dropdown, click Add… > Traktor > Kontrol D2


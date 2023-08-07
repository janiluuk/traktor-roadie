#!/bin/bash

echo "Please enter your Native Instruments DJ controller type (S4, S5, S8, D2, None): "
read controller_type

if [ "$controller_type" == "None" ]; then
    controller_type="D2"
fi

default_dir="/Applications/Native Instruments/Traktor Pro 3/Traktor.app/Contents/Resources/qml/CSI"
target_dir="$default_dir"

while [ ! -d "$target_dir" ]; do
    echo "Directory $target_dir not found. Please enter the correct directory path:"
    read target_dir
done

backup_dir="${target_dir}_backup"

cp -R "$target_dir" "$backup_dir"
cp -R "<path-to-api-folder>" "${target_dir}/Api"
cp "<path-to-api-folder>/${controller_type}.qml" "$target_dir"

echo "You can open Traktor now:"
echo "    Go to Preferences > Controller Manager"
echo "    Below the Device dropdown, click Add… > Traktor > Kontrol D2"


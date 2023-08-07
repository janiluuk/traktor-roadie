import os
import shutil

# Define choices
choices = ["S4", "S5", "S8", "D2", "None"]

# Prompt user for DJ controller type
controller_type = input("Please enter your Native Instruments DJ controller type (S4, S5, S8, D2, None): ")

# If None is chosen, set to D2
if controller_type == "None":
    controller_type = "D2"

# Ensure a valid choice has been made
if controller_type not in choices:
    print(f"Invalid choice: {controller_type}")
    exit(1)

# Determine the operating system and target directory
if os.name == 'nt':  # Windows
    target_dir = r"C:\Program Files\Native Instruments\Traktor 3\Resources64\qml\CSI"
else:  # macOS
    target_dir = r"/Applications/Native Instruments/Traktor Pro 3/Traktor.app/Contents/Resources/qml/CSI"

# Back up the target directory
backup_dir = target_dir + "_backup"
shutil.copytree(target_dir, backup_dir)

# Copy the Api folder into the target directory
api_dir = r"<path-to-api-folder>"
shutil.copytree(api_dir, os.path.join(target_dir, "Api"), dirs_exist_ok=True)

# Copy the controller type file into the target directory, overwriting if it exists
controller_file = os.path.join(api_dir, f"{controller_type}.qml")
shutil.copy2(controller_file, target_dir)

# Print the prompt
print("""
You can open Traktor now:

    Go to Preferences > Controller Manager
    Below the Device dropdown, click Add… > Traktor > Kontrol D2
""")


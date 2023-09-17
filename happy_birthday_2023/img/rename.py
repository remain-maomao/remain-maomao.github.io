import os

def rename_files_in_directory(path):
    for filename in os.listdir(path):
        if filename.startswith("image") and (filename.endswith(".jpg") or filename.endswith(".jpeg")):
            new_name = filename.replace("image", "img")
            os.rename(os.path.join(path, filename), os.path.join(path, new_name))

rename_files_in_directory(".")
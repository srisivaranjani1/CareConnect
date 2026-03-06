import kagglehub
import os

path = kagglehub.dataset_download("dhivyeshrk/diseases-and-symptoms-dataset")

print("Dataset path:", path)
print("Files:", os.listdir(path))
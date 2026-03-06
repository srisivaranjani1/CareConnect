import pandas as pd

df = pd.read_csv("Final_Augmented_dataset_Diseases_and_Symptoms.csv")

print(df.head())
print("\nColumns:")
print(df.columns)

print("\nDataset shape:", df.shape)
import pandas as pd
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_csv("Final_Augmented_dataset_Diseases_and_Symptoms.csv")

# First column is disease
disease_col = df.columns[0]

# Remaining columns are symptoms
symptom_cols = df.columns[1:]

# Convert symptoms into list
df["symptoms"] = df[symptom_cols].values.tolist()

# Convert symptoms to binary matrix
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(df["symptoms"])

# Target variable
y = df[disease_col]

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X, y)

# Save model
joblib.dump(model, "health_model.pkl")
joblib.dump(mlb, "symptom_encoder.pkl")

print("✅ Model trained and saved")
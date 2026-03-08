# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from dotenv import load_dotenv
# import os
# from groq import Groq
# load_dotenv()
# app = Flask(__name__)
# CORS(app)

# # Initialize Groq client
# client = Groq(api_key=os.getenv("GROQ_API_KEY"))


# @app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.get_json()

#         if not data or "symptoms" not in data:
#             return jsonify({"message": "Invalid request"}), 400

#         user_input = data["symptoms"][0]

#         prompt = f"""
# A patient reports these symptoms: {user_input}

# Respond in a SHORT and USER FRIENDLY format.

# Format strictly like this:

# 🦠 Disease:
# <possible disease>

# 📋 Reason:
# <short explanation>

# 💊 Precautions:
# • precaution 1
# • precaution 2
# • precaution 3

# ⚠️ Doctor Advice:
# <when to consult doctor>

# Keep the response under 80 words.
# """

#         completion = client.chat.completions.create(
#             model="llama-3.3-70b-versatile",
#             messages=[
#                 {
#                     "role": "system",
#                     "content": "You are a helpful healthcare assistant that gives short and simple medical suggestions."
#                 },
#                 {
#                     "role": "user",
#                     "content": prompt
#                 }
#             ],
#             temperature=0.3
#         )

#         reply = completion.choices[0].message.content

#         return jsonify({
#             "message": reply
#         })

#     except Exception as e:
#         print("SERVER ERROR:", e)
#         return jsonify({
#             "message": "Server error occurred"
#         }), 500


# if __name__ == "__main__":
#     app.run(port=5001, debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import re
from groq import Groq

load_dotenv()

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data or "symptoms" not in data:
            return jsonify({"message": "Invalid request"}), 400

        user_input = data["symptoms"][0]

        prompt = f"""
A patient reports these symptoms: {user_input}

Respond in a SHORT and USER FRIENDLY format.

Format strictly like this:

🦠 Disease:
<possible disease>

📋 Reason:
<short explanation>

💊 Precautions:
• precaution 1
• precaution 2
• precaution 3

⚠️ Doctor Advice:
<when to consult doctor>

Keep the response under 80 words.
"""

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful healthcare assistant that gives short and simple medical suggestions."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3
        )

        reply = completion.choices[0].message.content

        disease_match = re.search(r"Disease:\s*(.*)", reply)
        disease = disease_match.group(1).strip() if disease_match else ""

        return jsonify({
            "message": reply,
            "disease": disease
        })

    except Exception as e:
        print("SERVER ERROR:", e)
        return jsonify({
            "message": "Server error occurred"
        }), 500


@app.route("/diet", methods=["POST"])
def diet():
    try:
        data = request.get_json()
        disease = data.get("disease")

        if not disease:
            return jsonify({"diet": "No disease provided"}), 400

        prompt = f"""
Give a short diet plan for a patient with {disease}.

Format:

🥗 Foods to Eat:
• item1
• item2
• item3

🚫 Foods to Avoid:
• item1
• item2
• item3

Keep it short.
"""

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a nutrition assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        diet_reply = completion.choices[0].message.content

        return jsonify({
            "diet": diet_reply
        })

    except Exception as e:
        print("SERVER ERROR:", e)
        return jsonify({
            "diet": "Could not generate diet plan."
        }), 500


if __name__ == "__main__":
    app.run(port=5001, debug=True)
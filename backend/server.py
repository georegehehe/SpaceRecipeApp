from flask import Flask, request
from flask_cors import CORS, cross_origin
import pandas as pd 
from openai import OpenAI
import config

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

client = OpenAI(api_key=config.API_KEY)


@app.route('/api', methods=['GET'])
def get_data():
    return {'message': '✅'}

@app.route('/api/getInstruction', methods=['POST'])
def get_instruction():
    data = request.json
    recipeName = data['recipeName']
    ingredients = data['ingredients']
    ingredient_text = ",".join(ingredients)
    try:
        prompt = f"Imagine you are the coordinator of the food station on a futurstic space station and you now have to give instructions on how to cook space foods. The name of the space food is {recipeName}. The ingredients needed for the foods are {ingredient_text}. Be brief, make it creative and fun."
        messages = [{"role": "user", "content": prompt}]
        response = client.chat.completions.create(model = "gpt-3.5-turbo",
        messages = messages,
        temperature = 0)
        print(response.choices[0].message.content)
        return {'message': response.choices[0].message.content}
    except Exception as e:
        app.logger.error(f'error: {e}')
        return "internal server error", 500

@app.route('/api/getResponse', methods=['POST'])
def get_response():
    data = request.json
    prompt_raw = data['prompt']
    recipeName = data['recipeName']
    ingredients = data['ingredients']
    ingredient_text = ",".join(ingredients)
    try:
        prompt = f"Imagine you are the coordinator of the food station on a futuristic space station. A passenger wants to cook a space food named {recipeName}. The ingredients for the food are {ingredient_text}. Respond to the passenger's question in plain language: {prompt_raw}. Be brief, make it creative and fun."
        messages = [{"role": "user", "content": prompt}]
        response = client.chat.completions.create(model = "gpt-3.5-turbo",
        messages = messages,
        temperature = 0)
        print(response.choices[0].message.content)
        return {'message': response.choices[0].message.content}
    except Exception as e:
        app.logger.error(f'error: {e}')
        return "internal server error", 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

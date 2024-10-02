from flask import Flask, request, jsonify, render_template
from query_data import query_rag  # Your existing query function

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Render the main page

@app.route('/query', methods=['POST'])
def handle_query():
    data = request.json
    query_text = data.get('query')
    response = query_rag(query_text)  # Use your existing function
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)


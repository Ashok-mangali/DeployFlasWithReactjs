# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
from flask_cors import CORS

# Initializing flask app
app = Flask(__name__)
CORS(app)


# Route for seeing a data
@app.route('/data', methods=['GET'])
def get_data():
	data = {
		"Name": "Ashok",
		"Age": 20,
		"Role": "Developer"
	}
	return jsonify(data)

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)

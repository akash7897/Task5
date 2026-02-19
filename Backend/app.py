from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route("/", methods=["GET"])
def get_data():
    return jsonify({"message": "Backend running"})

@app.route("/submit", methods=["POST"])
def submit_form():

    data = request.get_json()

    name = data.get("name")

    return jsonify({
        "status": "success",
        "name": name,
        "message": "Registration successful"
    })

if __name__ == "__main__":
    app.run(port=8000,host="0.0.0.0", debug=True)

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/congratulazioni')
def congratulazioni():
    return render_template('congratulazioni.html')

@app.route('/valentine_no')
def valentine_no():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")



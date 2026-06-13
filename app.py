from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
@app.route("/post")
def post():
    return render_template('post.html',
    )
@app.route("/contact")
def contact():
    return render_template('contact.html')
@app.route("/support")
def support():
    return render_template('support.html')
    
app.run(host='0.0.0.0', debug=True, port=5000)
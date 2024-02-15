#!/usr/bin/python
"""An api endpoint to serve the landing page"""
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/Terminal/", strict_slashes=False)
def termiinal_landing_page():
    """returns a rendered template"""
    return render_template("landing_page.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="4999", debug=True)

#! /usr/bin/env python

from flask import Flask, render_template
from secrets import API_KEY

app = Flask(__name__)

@app.route('/', ['GET', 'POST'])
def index():
	return render_template('vinpw/main0.html', API_KEY=API_KEY)


if __name__ == "__main__":
	app.run(debug=True)

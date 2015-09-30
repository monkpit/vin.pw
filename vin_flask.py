#! /usr/bin/env python
from datetime import datetime
import pprint

from flask import Flask, render_template, abort, jsonify, request, Response
from flask.ext.sqlalchemy import SQLAlchemy

from local_settings import DATABASE_URI
from settings import CONNECTION_POOL_RECYCLE
from secrets import API_KEY

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_POOL_RECYCLE'] = CONNECTION_POOL_RECYCLE
db = SQLAlchemy(app)

class Search(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    vin = db.Column(db.String(17), unique=False)
    search_time = db.Column(db.DateTime)

    def __init__(self, vin, search_time=datetime.utcnow()):
        self.vin = vin
        self.search_time = search_time

    def __repr__(self):
        return '< VIN: {vin} - Searched: {time} >'.format(vin=self.vin, time=self.search_time)

@app.route('/', methods=['GET', 'POST'])
def index():
	if request.method == 'POST':
		searched_vin = request.form.get('vin', None)
		if searched_vin is None:
			abort(400)
		else:
			search = Search(vin=searched_vin)
			print(search)
			db.session.add(search)
			db.session.commit()
			return jsonify(response='201'), 201
	else:
		return render_template('vinpw/main0.html', API_KEY=API_KEY)

@app.route('/stats')
def stats():
	recent_searches = Search.query.limit(100).all()
	print_text = pprint.pformat(recent_searches, indent=4)
	return Response(print_text, mimetype='text/plain')

if __name__ == "__main__":
	db.create_all()
	app.run(debug=True)

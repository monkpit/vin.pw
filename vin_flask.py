#! /usr/bin/env python
from datetime import datetime
import pprint

from flask import Flask, render_template, abort, jsonify, request, Response
from flask.ext.sqlalchemy import SQLAlchemy

import requests

from local_settings import DATABASE_URI
from settings import CONNECTION_POOL_RECYCLE, EDMUNDS_VIN_ENDPOINT


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

@app.route('/', defaults={'vin': ""})
@app.route('/<vin>')
def index(vin):
	return render_template('vinpw/main0.html', vin=vin)

@app.route('/lookup/<vin>')
def lookup_vin(vin):
    if vin is None:
        return render_template('vinpw/invalid_vin.html')
    elif len(vin) != 17:
        return render_template('vinpw/invalid_vin.html')
    else:
        search = Search(vin=vin)
        print(search)
        db.session.add(search)
        db.session.commit()
        url = EDMUNDS_VIN_ENDPOINT.format(vin=vin)
        print(url)
        try:
            vin_data_json = requests.get(url).json()
            return render_template('vinpw/vin_data.html', data=vin_data_json)
        except Exception as e:
            print(e)
            return render_template('vinpw/invalid_vin.html')

@app.route('/stats')
def stats():
	recent_searches = Search.query.limit(100).all()
	print_text = pprint.pformat(recent_searches, indent=4)
	return Response(print_text, mimetype='text/plain')

if __name__ == "__main__":
	db.create_all()
	app.run(debug=True)

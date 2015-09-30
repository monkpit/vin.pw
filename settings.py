from secrets import API_KEY

CONNECTION_POOL_RECYCLE = 4
EDMUNDS_VIN_ENDPOINT = 'https://api.edmunds.com/api/vehicle/v2/vins/{vin}?fmt=json&api_key={api_key}'.format(api_key=API_KEY, vin='{vin}')

#!/usr/bin/python3
"""
Python script that sends a POST request to the URL and
to an URL with the letter as a parameter
"""
import requests
import sys


if __name__ == "__main__":
    data = {'q': ""}

    try:
        data['q'] = sys.argv[1]
    except IndexError:
        pass

    response = requests.post('http://0.0.0.0:5000/search_user', data)

    try:
        json_response = response.json()
        if not json_r:
            print("No result")
        else:
            print("[{}] {}".format(json_r.get('id'), json_r.get('name')))
    except ValueError:
        print("Not a valid JSON")

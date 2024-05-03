#!/usr/bin/python3
"""
Python script that sends a request to the URL and
displays the value of a variable in the response header
"""
import requests
import sys


if __name__ == "__main__":
    try:
        response = requests.get(sys.argv[1])
        print(response.headers['X-Request-Id'])
    except:
        pass

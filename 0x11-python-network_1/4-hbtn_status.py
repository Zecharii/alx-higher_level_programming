#!/usr/bin/python3
"""
Python script that fetches a URL with request package
"""
import requests

if __name__ == '__main__':
    response = requests.get(https://alx-intranet.hbtn.io/status)
    body = response.text
    print("Body response:")
    print("\t- type:", type(body))
    print("\t- content:", body)

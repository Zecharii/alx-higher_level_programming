#!/usr/bin/python3
"""
Python script that shows the last 10 commits of a repository
in GitHub
"""
from requests import get, auth
import sys


if __name__ == "__main__":
    try:
        repo = sys.argv[1]
        owner = sys.argv[2]
        url = 'https://api.github.com/repos/{}/{}/commits'.format(owner, repo)
        response = get(url)
        json_response = response.json()
        for i in range(0, 10):
            print("{}: {}".format(json_response[i].get('sha'), json_response[i].get('commit')
                                  .get('author').get('name')))
    except:
        pass

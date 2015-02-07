SHELL=/bin/bash
.PHONY: setup

setup: 
	test -d .venv || virtualenv .venv
	. .venv/bin/activate; pip install -r requirements.txt

clean:
	rm -rf .venv

create:
	curl -X POST -d '{"email": "${email}", "type":"user"}' -H 'Content-Type: application/json' http://test:test123@localhost:5984/couchdbday/

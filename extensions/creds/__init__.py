from tornado import gen, httpclient
import logging


@gen.coroutine
def receiver(doc):
    logging.info("Using creds")
    logging.debug("doc: %s", str(doc))
    http_client = httpclient.AsyncHTTPClient()
    secret = yield http_client.fetch("http://test:test123@localhost:5984/_config/couch_httpd_auth/secret")
    creds = {}
    creds['secret'] = secret.body.replace("\"", "").strip()
    raise gen.Return(creds)

EXTENSION = {"name": "Creds", "receiver": receiver, "type": "provider"}

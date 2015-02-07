from tornado import gen
import couch
import logging
import uuid


@gen.coroutine
def receiver(doc, changes, namespace, url, database):
    logging.info("Using create_user")
    logging.debug("create user doc: %s", str(doc))
    if "email" in doc:
        email = doc["email"]
        users = couch.AsyncCouch('users', url)
        uusers = couch.AsyncCouch('_users', url)
        userdoc = {'_id': email, 'company': database}
        newuserdoc = {'_id': 'org.couchdb.user:'+email, 'name': email, 'password': uuid.uuid4().hex, 'newuser': True, 'type': 'user', 'roles':[database]}
        try:
            yield users.save_doc(userdoc)
            yield uusers.save_doc(newuserdoc)
        except Exception, e:
            logging.debug("Couch exception: %s", str(e))
        response = ""
    else:
        response = "error"
    raise gen.Return(response)

EXTENSION = {"name": "CreateUsers", "receiver": receiver, "type": "exit"}

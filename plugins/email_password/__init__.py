# -*- coding: utf-8 -*-
from tornado import gen, httpclient
from tornado.escape import json_decode
import datetime
from hashlib import sha1
import hmac
import calendar
import emails
import logging

@gen.coroutine
def receiver(args):
    logging.info("Enter email_password")
    username = str(args['doc']['name'])
    secret = str(args['creds']['secret'])
    usersalt = str(args['doc']['salt'])
    week = datetime.datetime.utcnow() + datetime.timedelta(days=7)
    weekinms = calendar.timegm(week.timetuple())
    usertime = str(username+":"+"%X" % weekinms)
    logging.debug("usertime: %s", str(usertime))
    try:
        hashed = hmac.new(secret+usersalt, usertime, sha1)
    except Exception as e:
        logging.debug("hmac e: %s", str(e))
    newcookie = usertime+":"+hashed.digest()
    newcookie = str(newcookie.encode("base64"))
    newcookie = newcookie.replace("=","").replace("/","_").replace("+","-").replace("\n","")
    logging.debug("newcookie: %s", str(newcookie))
    logging.debug("http://couchdbday:5984/new/"+username+"/"+newcookie)
    #try:
    #    message = emails.html(html=u'Welcome to example<br/><br/><a href="http://couchdbday:5984/new/'+unicode(username)+'/'+unicode(newcookie)+'">New user</a>Regards,<br/>Example sender',
    #                          text=u'Welcome to example\nhttp://couchdbday/new/'+unicode(username)+'/'+unicode(newcookie)+'\n\nRegards,\nExample sender',
    #                          subject='Example registration',
    #                          mail_from=('Example sender', 'example@example.com'))
    #    message.send(to=('', username))
    #except Exception as e:
    #    logging.debug("message send e: %s", str(e))
    raise gen.Return("")

PLUGIN = {"name": "EmailPassword", "receiver": receiver, "sub": "emailpassword",
          "provider": "creds", "pub": "emailpassworddone"}

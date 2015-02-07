from tornado import gen
import logging


@gen.coroutine
def receiver(args):
    logging.info("Enter creating_user")
    logging.debug("args: %s", str(args))
    raise gen.Return(True)

PLUGIN = {"name": "CreatingUser", "receiver": receiver, "sub": "createuser",
          "namespace": "", "exit": "create_user", "pub": "createuser_end"}

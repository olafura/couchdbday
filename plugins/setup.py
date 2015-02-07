from setuptools import setup, find_packages

setup(
    name='sundaytasks_user',
    version='0.01',

    description='Sundaytask plugins to create and email user',

    author='Olafur Arason',
    author_email='olafura@reontech.com',
    packages=['email_password', 'creating_user'],

    entry_points="""
        [sundaytasks.plugin]
        email_password = email_password:PLUGIN
        creating_user = creating_user:PLUGIN
    """,
    zip_safe = False
)

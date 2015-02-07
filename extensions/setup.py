from setuptools import setup, find_packages

setup(
    name='sundaytasks-extensions-user',
    version='0.01',

    description='Sundaytask extension to create an user',

    author='Olafur Arason',
    author_email='olafura@reontech.com',
    packages=['merge_extension', 'creds', 'create_user'],

    entry_points="""
        [sundaytasks.extension]
        merge = merge_extension:EXTENSION
        create_user = create_user:EXTENSION
        creds = creds:EXTENSION
    """,
    zip_safe=False
)

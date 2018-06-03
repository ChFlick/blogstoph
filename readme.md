# Blogstoph

[![Build Status](https://travis-ci.org/ChFlick/blogstoph.png?branch=master)](https://travis-ci.org/ChFlick/blogstoph)
[![Maintainability](https://api.codeclimate.com/v1/badges/fcd4bfab8628cde9080e/maintainability)](https://codeclimate.com/github/ChFlick/blogstoph/maintainability)
[![codecov](https://codecov.io/gh/ChFlick/blogstoph/branch/master/graph/badge.svg)](https://codecov.io/gh/ChFlick/blogstoph)

A simple blog / blogging app, built in react.
It was created so I could dive deeper into react development.

The app can be seen live at <https://blogstoph.herokuapp.com/>

If you have any ideas or comments feel free to contact me.

[Roadmap](./roadmap.md)

## Running the App

You need a firebase database. The rules for the database can be found in the [database-rules.json](./database-rules.json).  For the test database ".read" and ".write" can be set to true.

Put the data of your firebase db in .env.test for the tests /.env.development for the development server.

You can run the development server with the dev-server command (eg `yarn run dev-server`).
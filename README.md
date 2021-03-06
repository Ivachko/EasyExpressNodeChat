# Easy Express NodeChat

![Build Status](https://travis-ci.org/Ivachko/EasyExpressNodeChat.svg?branch=master)
![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)
![Maintainability](https://api.codeclimate.com/v1/badges/ef0ecb405ef077476e36/maintainability)

A simple nodeJS chat service with Express and a Mysql database

## Installation

 - Clone git repository `https://github.com/Ivachko/EasyExpressNodeChat.git`
 - Assemble the project `npm install && bower install`
 - Don't forget to configure access to the database  `config/config.js`

    ```javascript
    const config = {
        development: {
            root: rootPath,
            app: {
            name: 'chatnode'
            },
            port: process.env.PORT || 3000,
            /**
             * Here change your config
             */
            db: 'mysql://user:password@host/chatnode'
        },

        test: {
            root: rootPath,
            app: {
            name: 'chatnode'
            },
            port: process.env.PORT || 3000,
            /**
             * Here change your config
             */
            db: 'mysql://user:password@host/chatnode'
        },

        production: {
            root: rootPath,
            app: {
            name: 'chatnode'
            },
            port: process.env.PORT || 3000,
            /**
             * Here change your config
             */
            db: 'mysql://user:password@host/chatnode'
        }
        }
    ```

 - Launch the server `grunt`

As simple as that !

## Contribution
Thank you for your interest in this project! 

Once the installed project and your written changes, consider **adding tests** to ensure their integrity.
Run the tests locally with a `npm test` to make sure you didn't break anything.

Then do a pull request with a description of what your changes are making, a CoreTeam member will review and come back to you if necessary or incorporate your changes into the code.

## Conventions
 - The code follows [Standard](https://github.com/standard/standard "Standard repo") conventions.
 - Be sure to write the doc comments and comment on the key points of your code, *in English*.
 - For commit messages, use a short sentence without capital letters (always in English).
 - During a PR merge, commits must be squashed with their own commit message.
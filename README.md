# Rule-of-thumb

## Zemoga Tech test

This proyect was made with:
* create-react-app
* react-router
* redux, react-redux, redux-thunk (store). Redux store configure to persist on localStorage
* notification system with react-toastify library
* JSON-server with Nodejs
* axios to handle requests

###  To install and run this proyect

**Note:** Because this project was made before node version 17, it has a problem when you have the latest version of node. There are two solutions:

**Reason For The Error**
In Node.js v17, the Node.js developers closed a security hole in the SSL provider. This fix was a breaking change that corresponded with similar breaking changes in the SSL packages in NPM. When you attempt to use SSL in Node.js v17 or later without also upgrading those SSL packages in your package.json, then you will see this error. *Source*: [StackOverflow](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

- You downgrade your version of Node to version 16.13.0
- Or you run `npm audit fix --force`, However, be aware that, for complex builds, the previous command will pull in breaking security fixes that can potentially break your build

This error shouldn't affect yarn users

1.First clone the repository on your local:
  * HTTPS: https://github.com/Isis-Yamel/Rule-of-thumb.git
  * SSH: git@github.com:Isis-Yamel/Rule-of-thumb.git

2.Once you have the repository on your local machine, install the dependencies. On the proyect folder, run this command ```yarn install``` or ```npm install```

1. Finally, after the installation. Run the server and the proyect in the this order: (Server is set to run on port:8000 and proyect on port:3000)
  * Run the server: On terminal  ```yarn start-server``` or ```npm run start-server```
  * Then, open new terminal tab, and start the proyect ```yarn start``` or ```npm start```

###  Issues

**Firefox backdrop-filter css property support**

If you will run the proyect on firefox, there is a little configuration that needs to be changed:

Open a tab on firefox and type on the address bar: **about:config**

Then search the following preferences and set them to true:
* layout.css.backdrop-filter.enabled
* gfx.webrender.all
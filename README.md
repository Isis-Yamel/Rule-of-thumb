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

1.First clone the repository on your local:
  * HTTPS: https://github.com/Isis-Yamel/Rule-of-thumb.git
  * SSH: git@github.com:Isis-Yamel/Rule-of-thumb.git

2.Once you have the repository on your local machine, install the dependencies. On the proyect folder, run this command ```yarn install```

3. Finally, after the installation. Run the server and the proyect in the this order: (Server is set to run on port:8000 and proyect on port:3000)
  * Run the server: On terminal  ```yarn start-server```
  * Then, open new terminal tab, and start the proyect ```yarn start``

###  Issues

**Firefox backdrop-filter css property support**

If you will run the proyect on firefox, there is a little configuration that needs to be changed:

Open a tab on firefox and type on the address bar: **about:config**

Then search the following preferences and set them to true:
* layout.css.backdrop-filter.enabled
* gfx.webrender.all
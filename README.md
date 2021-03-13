# mernstack-redux-ecommerce
MERN Stack
MongoDB, Expressjs, React/Redux, Nodejs

Usage (run fullstack app on your machine)
Prerequirements
MongoDB
Node ^10.0.0
npm
notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

Client-side usage(PORT: 3000)
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
Server-side usage(PORT: 8000)
Prepare your secret
run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

Dependencies(tech-stacks)
Client-side	Server-side
axios: ^0.15.3	bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18	body-parser: ^1.15.2
lodash: ^3.10.1	cors: ^2.8.1
react: ^16.2.0	dotenv: ^2.0.0
react-dom: ^16.2.0	express: ^4.14.0
react-redux: ^4.0.0	jwt-simple: ^0.5.1
react-router-dom: ^4.2.2	mongoose: ^4.7.4
redux: ^3.7.2	morgan: ^1.7.0
redux-thunk: ^2.1.0	

# FTrack

https://desolate-lake-47207.herokuapp.com/

FTrack is a web application for recording and monitoring clients and projects for freelance work. The application is build using the MERN stack (MongoDB, Express, React/Redux, Node). 

### Installation

FTrack requires [Node.js](https://nodejs.org) v8+ to run.

Install the dependencies and devDependencies and start the server and client.

```
npm install -d
npm run dev
```
To start just the express server use `npm run server`.
To start just the react client use `npm run client`.


For production environments:

```
NODE_ENV=production
```

Rename `example.dev.js` to `dev.js` and input the appropriate variable values:
`MongoURI` requires a connection to a mongoDB such as [mLab](https://mlab.com/).
`SESSION_SECRET` is the key used to compute the hash for [express-session](https://www.npmjs.com/package/express-session).

### Todo
- Add confirm modal for deleting tasks
- Add edit feature for tasks
- Add OAuth for Google and GitHub
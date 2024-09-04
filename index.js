//import json-server
const jsonserver=require('json-server')

//creating server
const myServer=jsonserver.create()

//initialising middleware
const middleware=jsonserver.defaults()
//creating router instamce for resources
const router=jsonserver.router('db.json')

//configuring middleware and router to the server
myServer.use(middleware)
myServer.use(router)

//setting port number
const PORT=3000 ||  process.env.PORT

//calling listen method with server for activating server
myServer.listen(PORT,()=>{
console.log("server running at port",PORT);

})
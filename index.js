const jsonServer = require('json-server')

const MPServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`);
})
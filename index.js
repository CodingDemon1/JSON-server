const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router("db.json");
const mw = jsonServer.defaults();

const port = process.env.PORT || 5500;

server.use(mw);
server.use(router);

server.listen(port, () => {
	console.log("server @ 5500");
});

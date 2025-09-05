const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.get("/health", (req, res) => res.json({ ok: true }));

server.use(router);

const PORT = process.env.PORT || 3000; // Render will assign PORT
server.listen(PORT, () => {
  console.log(`✅ JSON Server running on port ${PORT}`);
});

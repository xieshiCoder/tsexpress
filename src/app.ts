import * as express from "express";
import * as fs from "fs";
import * as log4js from "log4js";

log4js.configure("./src/config/log4js.json");
const log = log4js.getLogger("startup");

const app = express();

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));

app.get("/", (req, res) => {
    res.send("hello word");
});

const server = app.listen(3000, "localhost", () => {
    log.info("Express server listening on port ", server.address().port, " with pid ", process.pid );
});

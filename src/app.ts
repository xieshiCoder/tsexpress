import * as express from "express";
import * as log4js from "log4js";
const logger = log4js.getLogger("app");

const app = express();

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));

app.get("/", (req, res) => {
    res.send("hello word");
});

app.listen(3000, "localhost", () => {
    logger.debug("项目已启动：3000");
});

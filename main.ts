import cookieparser from "cookie-parser";
import morgan from "morgan";

import app from "./src/app";

import routerUser from "./src/routes/user.routes";
import { globalesMiddleware } from "./src/middleware/global";
import { ErrorMDW } from "./src/middleware/error";

const port = process.env.PORT ?? 3000;

const main = () => {
  // configurar los MDW
  app.use(morgan("dev"));
  app.use(cookieparser());
  loadExpress();

  //MDW Globales
  app.use(globalesMiddleware);

  //MDW de enrutamiento
  app.use("/api", routerUser);

  app.get("/", (req, res) => {
    res.status(200).send("Hola Mundo");
  });

  const message: string[] = [];

  app.post("/message", (req, res) => {
    const { msg } = req.body;
    console.log(msg)
    message.push(msg);
    res.status(201).send("message added");
  });

  app.get("/message", (req, res) => {
    const messageRes = message.shift();
    if (messageRes) {
      console.log(messageRes)
       res.status(200).send(messageRes);
    } else {
      res.status(204).send("No content");
    }
  });

  app.get("/error", (req, res) => {
    throw new Error("Error de ejemplo");
  });

  //MDW Errores
  app.use(ErrorMDW);
};

const loadExpress = () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar servicio :", error);
  }
};

main();

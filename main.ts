import cookieparser from "cookie-parser";
import morgan from "morgan";
import app from "./src/app";

import type { Request, Response, NextFunction } from "express";

const port = process.env.PORT ?? 3000;

const main = () => {
  // configurar los MDW
  app.use(morgan("dev"));
  app.use(cookieparser()); 

  cargarExpress();  
  mdwError();


  app.get("/", (req, res) => {
    res.status(200).send("Hola Mundo");
  });

};



const cargarExpress = () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar servicio :", error);
  }
};

const mdwError = () => {
  app.get("/error", (req, res) => {
    throw new Error("Error de ejemplo");
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send("Algo malo paso, Reintente nuevamente");
  });
};

main();

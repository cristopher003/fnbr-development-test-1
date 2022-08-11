import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/cliente.routes";

const app = express();

app.use(express.urlencoded({ extended: false }));
// Settings
app.set("port",process.env.PORT ||  4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/cliente", languageRoutes);

export default app;

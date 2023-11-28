import dotenv from "dotenv";
import express from "express";  
import roteadorAdministrador from "./routes/administrador.js";
import roteadorDocumento from "./routes/documento.js";
import roteadorLogin from "./routes/login.js";

dotenv.config();

const app = express();              
const port = 3000;                  

app.use(express.json());
app.use(roteadorAdministrador);
app.use(roteadorDocumento);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Analine Almeida e Silva: https://github.com/4n4l1n3",
  });
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});

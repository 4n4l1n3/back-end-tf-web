import { Router } from "express";
import { selectEmpresas, selectEmpresa, insertEmpresa, deleteEmpresa, updateEmpresa } from "../db/index.js";
import verificarAutenticacao from "../middlewares/autenticacao.js";

const router = Router();

router.get("/empresas", async (req, res) => {
    try {
        const empresas = await selectEmpresas();
        res.json(empresas);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
    console.log("Rota GET/empresas solicitada");
});

router.get("/empresa/:id", async (req, res) => {
    console.log("Rota GET /empresa solicitada");
    try {
        const empresa = await selectEmpresa(req.params.id);
        if (empresa.length > 0) res.json(empresa);
        else res.status(404).json({ message: "Empresa não encontrada!" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

router.post("/empresa",verificarAutenticacao, async (req, res) => {
    console.log("Rota POST /empresa solicitada");
    try {
        await insertEmpresa(req.body);
        res.status(201).json({ message: "Empresa inserida com sucesso!" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

router.delete("/empresa/:id",verificarAutenticacao, async (req, res) => {
    console.log("Rota DELETE /empresa solicitada");
    try {
        const empresa = await selectEmpresa(req.params.id);
        if (empresa.length > 0) {
            await deleteEmpresa(req.params.id);
            res.status(200).json({ message: "Empresa excluida com sucesso!!" });
        } else res.status(404).json({ message: "Empresa não encontrada!" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

router.put("/empresa",verificarAutenticacao, async (req, res) => {
    console.log("Rota PUT /empresa solicitada");
    try {
        const empresa = await selectEmpresa(req.body.id);
        if (empresa.length > 0) {
            await updateEmpresa(req.body);
            res.status(200).json({ message: "Empresa atualizada com sucesso!" });
        } else res.status(404).json({ message: "Empresa não encontrada!" });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

export default router;
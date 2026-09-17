import express from "express"
import Controller from '../controllers/Controller.js'
const router = express.Router()

router.get("/api", Controller.MenuController)

router.get("/api/informacoes",Controller.MenuInformativoController)

router.post("/api/celsiustoFahr",Controller.CelsiusToFahrenheitController)

router.post("/api/fahrtocelsius",Controller.FahrtocelsiusController)

router.post("/api/celsiustokelvin",Controller.CelsiustokelvinController)

export default router
import express from "express"
import cors from "cors"
import { logger } from "logger-express"

import loginRoutes from "./config/routes/loginRoutes.js"
import registerRoutes from "./config/routes/registerRoutes.js"
import profileRoutes from "./config/routes/profileRoutes.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(logger())
app.use("/", loginRoutes)
app.use("/", registerRoutes)
app.use("/", profileRoutes)

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`))
import { Router } from "express"

const router = Router()

router.use("/login", () => { console.log("function login") })

export default router
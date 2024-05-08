import { Router } from "express"
import postRoutes from "../entities/posts/posts.router.js"
import { login, register } from "../entities/auth/auth.controller.js"
import { auth } from "../validator/auth.js"

const router = Router()

router.use("/login", login)
router.use("/register", register)
router.use("/posts", postRoutes)



export default router
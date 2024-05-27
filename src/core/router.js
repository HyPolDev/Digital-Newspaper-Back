import { Router } from "express"
import postRoutes from "../entities/posts/posts.router.js"
import { login, register } from "../entities/auth/auth.controller.js"
import userRoutes from "../entities/users/user.router.js"
import posttypesRouter from "../entities/postTypes/postTypes.router.js"
import { auth } from "../validator/auth.js"

const router = Router()

router.use("/login", login)
router.use("/register", register)
router.use("/posts", postRoutes)
router.use("/users", userRoutes)
router.use("/post/types", posttypesRouter)


export default router
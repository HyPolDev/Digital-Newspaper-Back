import { Router } from "express"
import postRoutes from "../entities/posts/posts.router.js"


const router = Router()

router.use("/login", () => { console.log("function login") })
router.use("/posts", postRoutes)



export default router
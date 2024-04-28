import { Router } from "express"
import { getAllPosts } from "./post.controler.js"

const router = Router()

router.get("/", getAllPosts)


export default router
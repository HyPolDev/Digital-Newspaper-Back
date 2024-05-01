import { Router } from "express"
import { createPost, getAllPosts } from "./post.controler.js"
import { auth } from "../../validator/auth.js"


const router = Router()

router.get("/", getAllPosts)
router.post("/create", auth, createPost)


export default router
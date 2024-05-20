import { Router } from "express"
import { createPost, deletePost, getAllPosts, getPost } from "./post.controler.js"
import { auth } from "../../validator/auth.js"


const router = Router()

router.get("/", getAllPosts)
router.post("/create", auth, createPost)
router.get("/:id", getPost)
router.delete("/:id", auth, deletePost)

export default router
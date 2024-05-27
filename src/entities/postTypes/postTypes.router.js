import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isAdmin } from "../../validator/isAdmin.js"
import { createPostsTypes, deletePostsTypes, getAllPostsTypes, updatePostsTypes } from "./postTypes.controller.js"


const router = Router()

router.get("/", getAllPostsTypes)
router.post("/create", auth, isAdmin, createPostsTypes)
router.put("/:name", auth, isAdmin, updatePostsTypes)
router.delete("/:name", auth, isAdmin, deletePostsTypes)

export default router
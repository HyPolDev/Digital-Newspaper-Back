import { Router } from "express"
import { editProfile } from "./user.controler.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { auth } from "../../validator/auth.js"


const router = Router()

router.put("/:userName", auth, isSelfOrAdmin, editProfile)

export default router
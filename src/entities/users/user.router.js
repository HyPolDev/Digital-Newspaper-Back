import { Router } from "express"
import { deleteProfile, editProfile, getAllUsers } from "./user.controler.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { auth } from "../../validator/auth.js"
import { isAdmin } from "../../validator/isAdmin.js"


const router = Router()

//create already in the auth controllers as register 
router.get("/", auth, isAdmin, getAllUsers)
router.put("/:userName", auth, isSelfOrAdmin, editProfile)
router.delete("/:userName", auth, isSelfOrAdmin, deleteProfile)

export default router
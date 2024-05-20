export const isSelfOrAdmin = (req, res, next) => {
    try {

        if (req.tokenData.role !== "admin"
            && req.tokenData.userName !== parseInt(req.params.userName)) {
            console.log(req.tokenData.role);
            console.log(req.tokenData.userName);
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        console.log("next");
        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Role not valid"
        })
    }
}
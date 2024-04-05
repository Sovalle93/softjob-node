const validateParametersUser = (req, res, next) => {
    const { user } = req.body
    if (!user || !user.email || !user.password || !user.rol || !user.lenguage) {
        return res.status(400).json({ error: "el email, password, rol y lenguage deben estar presentes" })
    }
    next()
}

export { validateParametersUser }

const authenticate = (req, res, next) => {
    const token = req.query.token;
    if (!token || token !== "mi_token_secreto") {
        return res.status(401).json({ message: "Acceso no autorizado" });
    }
    next();
};

export default authenticate;

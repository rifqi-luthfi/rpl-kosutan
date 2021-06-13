const jwt = require("jsonwebtoken");

const pemilikAuth = (req, res, next) => {
  // middleware, digunakan untuk mengetahui apakan token di cookie valid 

  try {
    // ambil token di cookie
    const token = req.cookies.token;

    // jika tidak ada token maka bukan user authorized
    if (!token) res.status(401).json({ msg: "Unauthorized" });

    // cek apakah token valid
    const verified = jwt.verify(token, process.env.JWT_SECRET_PEMILIK);

    // jika token valid, attach userId ke request body
    req.userId = verified.id;
    req.isPemilik = true

    // send
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unathorized" });
  }
};

module.exports = pemilikAuth;
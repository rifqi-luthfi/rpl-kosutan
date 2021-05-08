const jwt = require("jsonwebtoken");

const penyewaAuth = (req, res, next) => {
  try {
    // get token from cookies
    const token = req.cookies.token;

    // if theres no token, unathorized
    if (!token) res.status(401).json({ msg: "Unauthorized" });

    // check if token is valid (not tampered)
    const verified = jwt.verify(token, process.env.JWT_SECRET_PENYEWA);

    // if it is add userId to request
    req.userId = verified.id;

    // send
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unathorized" });
  }
};

module.exports = penyewaAuth;
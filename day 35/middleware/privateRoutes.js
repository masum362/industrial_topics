const jwt = require("jsonwebtoken");
const sercretKey = process.env.JWT_SECRET_KEY;

const auth = (req, res, next) => {
  //
  const token = req.headers?.authorization?.split(" ")[1] || "";
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmY5MWIxMDcxYzk4YThjYzI2Zjg4NWEiLCJ1c2VyUm9sZSI6Im1hbmFnZXIiLCJpYXQiOjE3Mjc3NTc2MzR9.sRZsSslF0esTrcWJbwIK6vO4yIEgyfjCGvQrZoaR8to"

  if (!token) return res.status(403).json({ message: "unauthorized" });

  jwt.verify(token, sercretKey, function (err, decoded) {
    console.log(err);
    if (err) return res.status(403).json({ message: "Invalid user" });
    req.userId = decoded.userId;
    req.userRole = decoded.userRole;
    next();
    return;
  });
};

const checkRole = (...role) => {
  return (req, res, next) => {
    if (role.includes(req.userRole)) {
      next();
      return;
    }
    return res.status(403).json({ message: "Invalid credentials" });
  };
};

module.exports = { auth, checkRole };

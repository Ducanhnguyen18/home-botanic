const router = require("express").Router();

const ApiSignIn = require("./api/Signin.routes");
const ApiSignUp = require("./api/Signup.routes");
const ApiLogOut = require("./api/Logout.routes");

router.use("/api", ApiSignUp);
router.use("/api", ApiSignIn);
router.use("/api", ApiLogOut);

module.exports = router;
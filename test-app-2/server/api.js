const express = require("express");
const bodyParser = require("body-parser");
const registerUser = require("./register-user");

const router = express.Router();

router.use(bodyParser.json());
router.post("/signup", (req, res) => {
  console.log("POST BODY", req.body);
  registerUser(req.body.email).
    then(
      () => res.sendStatus(200),
      (err) => {
        console.log("Error occurred publishing mail", err);
        res.status(500).json({ error: err.message });
      });
});

module.exports = router;

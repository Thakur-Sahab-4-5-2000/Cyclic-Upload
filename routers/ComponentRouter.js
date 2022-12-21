const express = require("express");
const router = express.Router();
const {
  addCompenentFields,
  getCoponentFields,
} = require("../controllers/ComponentController");
const { body } = require("express-validator");

router.post(
  "/add",
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("placeholder").not().isEmpty().withMessage("Placeholder is required"),
  ],
  addCompenentFields
);
router.get("/get", getCoponentFields);

module.exports = router;

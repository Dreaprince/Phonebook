const { Phonebook, validate } = require("../models/phonebook");
const express = require("express");
const router = express.Router();

router.get("/",  async (req, res) => {
  const phonebooks = await Phonebook.find()
    .select("-__v")
    .sort("name");
  res.send(phonebooks);
});

router.post("/",  async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let phonebook = new Phonebook({
    name: req.body.name,
    email: req.body.email
  });
 phonebook = await phonebook.save();

  res.send(phonebook);
});


router.get("/:id", async (req, res) => {
  const phonebook = await Phonebook.findById(req.params.id).select("-__v");

  if (!phonebook)
    return res
      .status(404)
      .send("The phonebook with the given ID was not found.");

  res.send(phonebook);
});

module.exports = router;

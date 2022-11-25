const express = require('express')
const router = express.Router()
const Pirana=require('../models/pirana')

router.get('/piranas', (req,res) =>
{
    res.send('index',{ title: 'homepage' });
})
router.post("/piranas", (req, res) => {
 Pirana.create(req.body)
});
router.get("/gear", (req, res) => {
  res.render("gear", { title: 'gear' });
});
router.get("/profiles", (req, res) => {
  res.render("profiles", { title: 'profiles' });
});
router.get("/training", (req, res) => {
  res.render("training", { title: 'training' });
});

module.exports=router
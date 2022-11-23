const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>
{
    res.render("index", { title: 'homepage' });
})
router.get("/galas", (req, res) => {
  res.render("galas",{title:'galas'});
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
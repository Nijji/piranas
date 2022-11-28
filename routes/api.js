const express = require("express");
const router = express.Router();
const Pirana = require("../models/pirana");

router.get("/piranas", (req, res, next) => {
  Pirana.aggregate([
    {
      $geoNear: {
        near: {
          type: "point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        },
        spherical: true,
        maxdistance: 100000,
        distanceField: "dist.calulated",
      },
    },
  ]).then((piranas) => {
    res.send(piranas);
  }).catch(next)
});
router.post("/piranas", (req, res, next) => {
  Pirana.create(req.body)
    .then((pirana) => {
      res.send(pirana);
    })
    .catch(next);
});
router.delete("/piranas/:id", (req, res, next) => {
  Pirana.findByIdAndRemove({ _id: req.params.id }).then((pirana) => {
    res.send(pirana);
  });
});
router.put("/piranas/:id", (req, res, next) => {
  Pirana.findByIdAndUpdate({ _id: req.params.id }).then(() => {
    Pirana.findOne({ _id: req.params.id }).then((pirana) => {
      res.send(pirana);
    });
  });
});

module.exports = router;

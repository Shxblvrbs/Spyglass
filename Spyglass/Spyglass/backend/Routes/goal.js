const express = require("express");
const goalModel = require("../Models/Goals");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      res.status(403).json({ err: "Login Please" });
    }
    const goals = await goalModel.find({ userId });
    res.status(200).json(goals);
  } catch (err) {
    res.status(403).json({ err: err });
  }
});

router.get("/detail/:goalId", async (req, res) => {
  try {
    const goalId = req.params.goalId;
    if (!goalId) {
      return res.status(404).json("Gaol Not Found");
    }
    const goal = await goalModel.findById(goalId);
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;
    if (!goalId) {
      return res.status(404).json("Gaol Not Found");
    }
    const body = req.body;
    console.log("Body", body, goalId);
    const goal = await goalModel.findByIdAndUpdate(goalId, body);
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/delete/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;
    if (!goalId) {
      return res.status(404).json("Gaol Not Found");
    }

    const goal = await goalModel.findByIdAndDelete(goalId);
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/new", async (req, res) => {
  const body = req.body;

  const newGoal = new goalModel(body);
  newGoal.save().then((goal, err) => {
    if (goal) {
      return res.status(200).json(goal);
    } else {
      console.log("err", err);
      res.status(403).json({ err });
    }
  });
});

module.exports = router;

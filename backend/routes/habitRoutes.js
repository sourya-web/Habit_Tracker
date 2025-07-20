const express = require("express");
const router = express.Router();
const Habit = require("../models/Habits");

router.get("/", async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

router.post("/", async (req, res) => {
  const newHabit = new Habit(req.body);
  await newHabit.save();
  res.json(newHabit);
});

router.put("/:id", async (req, res) => {
  const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(habit);
});

router.delete("/:id", async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: "Habit deleted" });
});

module.exports = router;
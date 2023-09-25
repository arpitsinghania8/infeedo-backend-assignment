const Task = require("../models/task");

exports.createTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    const task = await Task.create({ title, status });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.title = title;
    task.status = status;
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const tasks = await Task.findAll({
      limit: parseInt(limit),
      offset: offset,
    });
    const totalTasks = await Task.count();
    const totalPages = Math.ceil(totalTasks / limit);

    res.status(200).json({
      tasks,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages,
      totalTasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

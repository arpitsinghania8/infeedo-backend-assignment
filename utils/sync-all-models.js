const Task = require("../models/task");

const models = [Task];

const syncFunction = async () => {
  try {
    for (const item of models) {
      const response = await item.sync({ force: true });
      console.log(response);
    }
  } catch (e) {
    console.error(e);
  }
};

syncFunction();

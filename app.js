const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const taskRoutes = require("./routes/taskRoutes");
const metricsRoutes = require("./routes/metricsRoutes");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/", (req, res) => {
  res.send("Hello inFeedo!");
});
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/metrics", metricsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

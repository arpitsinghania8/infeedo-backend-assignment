const Task = require("../models/task");
const { Sequelize } = require("sequelize");

exports.getTaskMetrics = async (req, res) => {
  try {
    const metrics = await Task.findAll({
      attributes: [
        "status",
        [
          Sequelize.fn("date_trunc", "month", Sequelize.col("createdAt")),
          "date",
        ],
        [Sequelize.fn("COUNT", Sequelize.col("id")), "count"],
      ],
      group: ["status", "date"],
      raw: true,
    });

    const transformedMetrics = metrics.reduce((result, item) => {
      const { status, date, count } = item;
      const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      if (!result[formattedDate]) {
        result[formattedDate] = {};
      }

      result[formattedDate][status + "_tasks"] = parseInt(count);

      return result;
    }, {});

    const metricsArray = Object.keys(transformedMetrics).map((date) => ({
      date,
      metrics: transformedMetrics[date],
    }));

    res.status(200).json(metricsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const { connection } = require("../../db/db_config");
const { createEventService, createcustom } = require("./product.services");
module.exports = {
  getEventsController: (req, res) => {
    connection.query("SELECT * FROM `Products`", (err, results) => {
      if (err) {
        res.send("Error reading from Database!");
      } else {
        res.json(results);
      }
    });
  },
  createEventController: (req, res) => {
    const product_id = req.body.product_id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category_id = req.body.category_id;
    const brand_id = req.body.brand_id;
    const stock_quantity = req.body.stock_quantity;

    createEventService(
      product_id,
      name,
      description,
      price,
      category_id,
      brand_id,
      stock_quantity,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully created product!");
        }
      }
    );
  },
  getcustom: (req, res) => {
    const id = req.body.id;

    createcustom(id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  },
};

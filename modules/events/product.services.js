const { connection } = require("../../db/db_config");
const createcustom = (id, callback) => {
  connection.query(
    `SELECT * FROM Products WHERE product_id=${id}`,
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};
const createEventService = (
  product_id,
  name,
  description,
  price,
  category_id,
  brand_id,
  stock_quantity,

  callback
) => {
  connection.query(
    `INSERT INTO Products VALUES(${product_id},"${name}","${description}",${price} ,${category_id},${brand_id},${stock_quantity}, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};
module.exports = {
  createEventService,
  createcustom,
};

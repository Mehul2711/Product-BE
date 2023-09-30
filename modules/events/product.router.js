const Router = require("express");
const {
  getEventsController,
  createEventController,
  getcustom,
} = require("./product.controller");
const eventsRouter = Router();
eventsRouter.get("/getProducts", getEventsController);
eventsRouter.post("/createProduct", createEventController);
eventsRouter.get("/getcustom", getcustom);
module.exports = { eventsRouter };

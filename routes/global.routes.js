const Router = require("express");
const { eventsRouter } = require("../modules/events/product.router");
const globalRouter = Router();

globalRouter.use("/", eventsRouter);
module.exports = { globalRouter };

import { privateRouter } from './Private';
import { publicRouter } from './Public';
import express from "express"
const router = express.Router();

//public
router.use("/", publicRouter);

//secure / private
router.use("/secure", privateRouter);

export default router;
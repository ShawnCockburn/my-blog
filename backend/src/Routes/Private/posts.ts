import Post from "../../Database/Schemas/Post";
import httpStatus from "http-status";
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  Post.find((err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    res.json(posts);
  });
};

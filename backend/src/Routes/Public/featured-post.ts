import { Request, Response } from "express";
import httpStatus from "http-status";
import Post from "../../Database/Schemas/Post";

export default (req: Request, res: Response) => {
  Post.find({ visible: true }, (err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.json(posts.pop());
  });
};

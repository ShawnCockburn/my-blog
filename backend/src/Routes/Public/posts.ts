import Post from "../../Database/Schemas/Post";
import httpStatus from "http-status";
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const query = Post.find({ visible: true });

  query.sort("-date");

  query.exec((err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    res.json(posts);
  });
};

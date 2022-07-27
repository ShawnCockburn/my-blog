import Post from "../../Database/Schemas/Post";
import httpStatus from "http-status";
import { Request, Response } from "express";

export default (req: Request<{ postID: string }>, res: Response) => {
  const { postID } = req.params;

  Post.findById(postID, (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.json(post);
  });
};

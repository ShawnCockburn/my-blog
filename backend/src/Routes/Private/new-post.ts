import { Request, Response } from "express";
import httpStatus from "http-status";
import Post from "../../Database/Schemas/Post";

export default (
  req: Request<
    {},
    {},
    {
      title: string;
      author: string;
      description: string;
      content: string;
      imageURL: string;
      tags: string[];
      visible: boolean;
    }
  >,
  res: Response
) => {
  if (Object.values(req.body).some((value) => value === undefined))
    return res.sendStatus(httpStatus.BAD_REQUEST);

  const post = new Post({
    ...req.body,
  });

  post.save(function (err) {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    res.sendStatus(httpStatus.OK);
  });
};

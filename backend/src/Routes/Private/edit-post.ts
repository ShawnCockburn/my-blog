import { Request, Response } from "express";
import httpStatus from "http-status";
import Post from "../../Database/Schemas/Post";

export default (
  req: Request<
    {},
    {},
    {
      _id: string;
    }
  >,
  res: Response
) => {
  //@ts-ignore
  const postBody = ({ _id, ...rest } = req.body);
  if (Object.values(postBody).some((value) => value === undefined))
    return res.sendStatus(httpStatus.BAD_REQUEST);

  //@ts-ignore
  Post.findByIdAndUpdate(_id, { ...postBody }, (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    res.json(post);
  });
};

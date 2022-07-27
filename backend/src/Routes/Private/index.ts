import jwt from "jsonwebtoken";
import editPost from "./edit-post";
import login from "./login";
import newPost from "./new-post";
import posts from "./posts";

import express, { Request } from "express";
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.use(
  (
    req: Request<
      {},
      {},
      {
        token: string;
      }
    >,
    res,
    next
  ) => {
    //if path is /login, skip the middleware
    if (req.path === "/login") next();

    const token = (req.body.token ||
      req.query.token ||
      req.headers["x-access-token"]) as string;

    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req["user"] = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  }
);

router.post("/login", login);
router.post("/post", newPost);
router.put("/post", editPost);
router.get("/posts", posts);

export const privateRouter = router;

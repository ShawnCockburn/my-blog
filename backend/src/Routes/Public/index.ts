import express from "express";
const router = express.Router();

import featuredPost from './featured-post';
import post from './post';
import posts from './posts';

router.get("/post/:postID", post)
router.get("/posts", posts);
router.get("/featured-post", featuredPost);

export const publicRouter = router;
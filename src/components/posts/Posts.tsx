import React from "react";
import { motion } from 'framer-motion'
import "./posts.css";

type Post = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date | undefined;
    heroImage?: string | undefined;
  };
};

type Props = {
  posts: Partial<Post>[];
};

function Posts(props: Props) {
  const [currentPosts, setCurrentPosts] = React.useState(props.posts);
  const [searchVisible, setSearchVisible] = React.useState(false);
  return (
    <div>
      <motion.div
        className={`search ${searchVisible ? "visible" : null}`}
        onClick={() => {
          setSearchVisible(true);
        }}
      >
        <svg
          width={searchVisible? "32": "36"}
          height={searchVisible? "32": "36"}
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
            fill-rule="nonzero"
          ></path>
        </svg>
        {searchVisible && (
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              const search = e.currentTarget.value;
              setCurrentPosts(
                props.posts.filter((post) => {
                  const title = post?.data?.title.toLowerCase() || "";
                  const description =
                    post?.data?.description.toLowerCase() || "";
                  const slug = post?.slug?.toLowerCase() || "";

                  console.log(search);

                  return (
                    title.includes(search.toLowerCase()) ||
                    description.includes(search.toLowerCase()) ||
                    slug.includes(search.toLowerCase())
                  );
                })
              );
            }}
          />
        )}
      </motion.div>
      <section>
        <ul>
          {currentPosts.map((post) => (
            <li>
              <a href={`/${post.slug}/`}>
                <img
                  width={720}
                  height={360}
                  src={post?.data?.heroImage}
                  alt=""
                />
                <h4 className="title">{post?.data?.title}</h4>
                <p className="date">
                  <time dateTime={post?.data?.pubDate.toISOString()}>
                    {post?.data?.pubDate.toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Posts;

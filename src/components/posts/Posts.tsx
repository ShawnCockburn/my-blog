import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
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

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark>{text.slice(index, index + query.length)}</mark>
      {text.slice(index + query.length)}
    </>
  );
}

function Posts(props: Props) {
  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [shortcut, setShortcut] = React.useState("⌘K");
  const [entered, setEntered] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // entrance stagger only applies to the initial mount, not filter changes
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  React.useEffect(() => {
    if (!/mac/i.test(navigator.platform)) setShortcut("ctrl k");
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim().toLowerCase();
  const currentPosts = q
    ? props.posts.filter((post) => {
        const title = post?.data?.title.toLowerCase() || "";
        const description = post?.data?.description.toLowerCase() || "";
        const slug = post?.slug?.toLowerCase() || "";
        return (
          title.includes(q) || description.includes(q) || slug.includes(q)
        );
      })
    : props.posts;

  return (
    <div>
      <div className={"searchbar mono" + (focused ? " focused" : "")}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          clipRule="evenodd"
          fillRule="evenodd"
        >
          <path
            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
            fillRule="nonzero"
          ></path>
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder="search posts…"
          aria-label="Search posts"
          onChange={(e) => setQuery(e.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <AnimatePresence>
          {q && (
            <motion.span
              className="count"
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              transition={{ duration: 0.15 }}
            >
              {currentPosts.length}/{props.posts.length}
            </motion.span>
          )}
        </AnimatePresence>
        {q ? (
          <button
            className="kbd"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            esc
          </button>
        ) : (
          <span className="kbd">{shortcut}</span>
        )}
      </div>
      <section>
        <motion.ul>
          <AnimatePresence>
            <LayoutGroup>
              {currentPosts.map((post, index) => (
                <motion.li
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 14 }}
                  transition={{
                    duration: entered ? 0.2 : 0.5,
                    ease: "easeInOut",
                    delay: entered ? 0 : 0.05 + index * 0.07,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <a href={`/${post.slug}/`}>
                    <img
                      alt=""
                      width={"auto"}
                      height={"auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      style={{
                        aspectRatio: "2 / 1",
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                      src={post?.data?.heroImage}
                    />
                    <h4 className="title">
                      {highlight(post?.data?.title || "", q)}
                    </h4>
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
                </motion.li>
              ))}
            </LayoutGroup>
          </AnimatePresence>
        </motion.ul>
        {currentPosts.length === 0 && (
          <motion.div
            className="empty mono"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>
              no posts match “{query.trim()}”
            </p>
            <button onClick={() => setQuery("")}>clear search</button>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default Posts;

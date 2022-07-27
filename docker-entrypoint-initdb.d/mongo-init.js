print(
  "Start #################################################################"
);

db = db.getSiblingDB("my-blog");
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "my-blog" }],
});
db.createCollection("users");
db.createCollection("posts");

// Insert a few documents into the sales collection.
db.posts.insertMany([
  {
    tags: ["example"],
    visible: true,
    title: "Welcome To My Blog",
    author: "Shawn Cockburn",
    description: "This is an example post",
    content:
      "### This is an example post content\n\nsee the [README](https://github.com/ShawnCockburn/my-blog/blob/master/readme.md) for more information.\n\n![over to you](https://media1.giphy.com/media/OBuyIUMHO6yVq/200.webp)\n\n---\n\nlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageURL:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZSUyMG1hY2Jvb2slMjBwcm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    date: { $date: { $numberLong: "1608747619090" } },
  },
]);

print("END #################################################################");

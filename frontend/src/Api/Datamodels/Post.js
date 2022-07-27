class Post {
    constructor(
        title,
        author,
        description,
        content,
        imageURL,
        tags,
        visible,
    ) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.content = content;
        this.imageURL = imageURL;
        this.tags = tags;
        this.visible = visible;
    }
}

export default Post;
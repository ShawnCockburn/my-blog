const url = "https://api-blog.shawncockburn.co.uk"

export const getAllPosts = async () => {
    const target = url + "/posts";
    const allPosts = await fetch(target);
    return await allPosts.json();
}

export const getPost = async postID => {
    const target = `${url}/post/${postID}`;
    const post = await fetch(target);
    return await post.json();
}

export const getFeaturedPost = async () => {
    const target = url + "/featured-post";
    const featuredPost = await fetch(target);
    return await featuredPost.json();
}
const url = window._env.API_BASE_URL;

const secureUrl = url + "/secure";

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

//secure

const secureFetch = async (endpoint, fetchOptions = {}) => {
    const target = secureUrl + endpoint;
    // Default options are marked with *
    const options = {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        ...fetchOptions
    };
    return await fetch(target, options);
}

const securePost = async (endpoint, data = {}, fetchOptions = {}) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        ...fetchOptions
    };
    return secureFetch(endpoint, options)
}
const securePut = async (endpoint, data = {}, fetchOptions = {}) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        ...fetchOptions
    };
    return secureFetch(endpoint, options)
}
const secureGet = async (endpoint, fetchOptions = {}) => {
    return secureFetch(endpoint, {...fetchOptions, method: 'GET'})
}

export const newPost = async post => {
    const endpoint = "/post";
    const res = await securePost(endpoint, post)
    return res.ok;
}

export const editPost = async post => {
    const endpoint = "/post";
    const res = await securePut(endpoint, post)
    return res.ok;
}

export const getAllPostsAdmin = async () => {
    const endpoint = "/posts";
    const res = await secureGet(endpoint)
    return await res.json()
}
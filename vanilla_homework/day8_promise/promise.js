export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return await res.json();
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return await res.json();
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results = [];
  for (let i = 0; i < order.length; i++) {
    const idx = order[i] - 1; // order is 1-based
    try {
      const result = await promises[idx]();
      results.push(result);
    } catch (err) {
      throw err;
    }
  }
  return results;
};

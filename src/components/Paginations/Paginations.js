import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
function Paginations() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Important Pagination Logic

  const indexOfLastPost = currentPage * postsPerPage;
  console.log(indexOfLastPost);
  // say 1st page * (10) => 10 posts
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //10 - 10
  console.log(indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //(1,10) Anyway this is what its suppose to print it out
  console.log(currentPosts);
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Pagination Demo</h1>
      {typeof posts == undefined ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Posts posts={currentPosts} loading={loading}></Posts>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          ></Pagination>
        </>
      )}
    </div>
  );
}

export default Paginations;

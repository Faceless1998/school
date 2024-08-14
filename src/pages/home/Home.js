import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination"; // Import the Pagination component
import IMG from "./../../assets/16.09.2022-2-1-2.jpg";
import posts from "./PostList"; // Your list of posts
import "./home.css";
import SchoolPart from "./SchoolPart";

const POSTS_PER_PAGE = 12;

export const Home = () => {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Remove duplicates and sort posts by ID in descending order
  const uniquePosts = Array.from(new Set(posts.map((post) => post.id))).map(
    (id) => posts.find((post) => post.id === id)
  );
  const sortedPosts = uniquePosts.slice().sort((a, b) => b.id - a.id);

  // Calculate the indexes for the current page's posts
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  // Function to handle changing the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <header className="header">
        <img src={IMG} alt="Header" className="header-image" />
      </header>

      <SchoolPart />

      <div className="post-container">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-brief-text">{post.briefText}</p>
            <Link to={`/post/${post.id}`} className="post-read-more">
              მეტის ნახვა
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        totalPosts={sortedPosts.length}
        postsPerPage={POSTS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

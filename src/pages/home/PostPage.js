import React from "react";
import { useParams } from "react-router-dom";
import posts from "./PostList"; // Make sure the path to PostList is correct
import "./home.css";

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="post-page">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <div className="post-content">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-text">
              {post.briefText.split("\n").map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          {post.imageGallery && post.imageGallery.length > 0 && (
            <div className="image-gallery">
              {post.imageGallery.map((img, index) => (
                <img
                  key={index}
                  src={`${img}`} // Adjust the path based on where your images are stored
                  alt={`Gallery ${index}`}
                  className="gallery-image"
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostPage;

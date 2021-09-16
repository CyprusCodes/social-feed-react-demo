import React from "react";
import Post from "./Post";

import posts from "../data/posts.json";

const FeedContainer = () => {
  return (
    <div className="feed-container">
      {posts.map((postData) => {
        return <Post 
            user={postData.sharedBy}
            caption={postData.caption}
            imgSrc={postData.media}
            totalReactions={postData.totalReactions}
            commentCount={postData.commentCount}
            shareCount={postData.shareCount}
            comments={postData.comments}
        />;
      })}
    </div>
  );
};

export default FeedContainer;

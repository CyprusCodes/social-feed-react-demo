import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-header">{props.user}</div>
      <div className="post-caption">{props.caption}</div>
      <div className="img-container">
        <img src={props.imgSrc} alt="post" width="500px"></img>
      </div>
      <div className="reactions-container">
        <div className="emoji-box">
          👍 💛 🤣
          <span className="interaction-count">
            {props.totalReactions} interactions
          </span>
        </div>
        <div className="action-summary">
          {props.commentCount} comments {props.shareCount} shares
        </div>
      </div>
      <div className="comments-container">
        <div className="like-share-comment-actions">
          <div className="action">👍 Like</div>
          <div className="action">💬 Comment</div>
          <div className="action">✌️ Share</div>
        </div>
        <div className="comment-container">
          {props.comments.map((comment) => {
            return (
              <div>
                <div className="post-header">{comment.author}</div>
                <div className="post-caption">{comment.message}</div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;

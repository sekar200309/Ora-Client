// // src/components/posts/PostCard.jsx
// import React from "react";

// const PostCard = ({ post }) => {
//   if (!post) return null;

//   const {
//     _id,
//     imageUrl,
//     caption,
//     likes = [],
//     user = {}, // fallback if undefined
//     createdAt,
//   } = post;

//   return (
//     <div key={_id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 p-4">
//       <div className="flex items-center mb-2">
//         <span className="font-semibold text-gray-800 dark:text-white">{user.username || "Unknown User"}</span>
//         <span className="text-sm text-gray-500 ml-auto">{new Date(createdAt).toLocaleString()}</span>
//       </div>
//       {imageUrl && (
//         <img src={imageUrl} alt="Post" className="w-full rounded-md mb-4 object-cover" />
//       )}
//       {caption && <p className="text-gray-700 dark:text-gray-200">{caption}</p>}
//       <div className="text-sm text-gray-500 mt-2">{likes.length} Likes</div>
//     </div>
//   );
// };

// export default PostCard;
// src/components/posts/PostCard.jsx
// import React from "react";

// const PostCard = ({ post }) => {
//   if (!post) return null;

//   const {
//     _id,
//     imageUrl,
//     caption,
//     likes = [],
//     user = {}, // fallback for undefined
//     createdAt,
//   } = post;

//   return (
//     <div key={_id} className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <span className="font-semibold text-lg">{user.username || "Unknown User"}</span>
//         <span className="text-sm text-gray-400">{new Date(createdAt).toLocaleString("en-IN")}</span>
//       </div>

//       {/* Image */}
//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt="Post"
//           className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
//         />
//       )}

//       {/* Caption */}
//       {caption && (
//         <p className="text-gray-300 text-base mb-2">{caption}</p>
//       )}

//       {/* Likes */}
//       <div className="text-sm text-gray-400">{likes.length} Likes</div>
//     </div>
//   );
// };

// export default PostCard;


// src/components/posts/PostCard.jsx
// import React from "react";
// import LikeButton from "./LikeButton"; // add at the top
// import CommentSection from "./CommentSection";
// const PostCard = ({ post }) => {
//   if (!post) return null;

//   const {
//     _id,
//     caption,
//     imageUrl,
//     image, // fallback for old data
//     likes = [],
//     postedBy,
//     user, // fallback for old data
//     createdAt,
//   } = post;

//   // Final image to show
//   const finalImage = imageUrl || (image ? `https://res.cloudinary.com/duu9o7ak9/image/upload/v1750660000/mern-social-posts/${image}` : null);

//   // Final user to show
//   const finalUser = postedBy?.username || post.user?.username || "Unknown User";

//   return (
//     <div key={_id} className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <span className="font-semibold text-lg">{finalUser}</span>
//         <span className="text-sm text-gray-400">
//           {new Date(createdAt).toLocaleString("en-IN")}
//         </span>
//       </div>

//       {/* Image */}
//       {finalImage && (
//         <img
//           src={finalImage}
//           alt="Post"
//           className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
//         />
//       )}

//       {/* Caption */}
//       {caption && (
//         <p className="text-gray-300 text-base mb-2">{caption}</p>
//       )}

//       {/* Likes */}
      
//      <LikeButton postId={_id} initialLikes={likes} />

// {/* comment */}


//           </div>
//   );
// };

// export default PostCard;



// src/components/posts/PostCard.jsx
// import React, { useState } from "react";
// import LikeButton from "./LikeButton";
// import CommentSection from "./CommentSection";

// const PostCard = ({ post }) => {
//   if (!post) return null;

//   const {
//     _id,
//     caption,
//     imageUrl,
//     image,
//     likes = [],
//     postedBy,
//     createdAt,
//     comments = [],
//   } = post;

//   const finalImage = imageUrl || (image ? `https://res.cloudinary.com/duu9o7ak9/image/upload/v1750660000/mern-social-posts/${image}` : null);
//   const finalUser = postedBy?.username || "Unknown User";

//   // ✅ FIX: Define this early
//   const [localComments, setLocalComments] = useState(comments);

//   return (
//     <div className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <span className="font-semibold text-lg">{finalUser}</span>
//         <span className="text-sm text-gray-400">
//           {new Date(createdAt).toLocaleString("en-IN")}
//         </span>
//       </div>

//       {/* Image */}
//       {finalImage && (
//         <img
//           src={finalImage}
//           alt="Post"
//           className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
//         />
//       )}

//       {/* Caption */}
//       {caption && <p className="text-gray-300 text-base mb-2">{caption}</p>}

//       {/* Like button */}
//       <LikeButton liked={false} count={likes.length} />

//       {/* ✅ Comments */}
//       <CommentSection
//         postId={_id}
//         comments={localComments}
//         onCommentAdded={(newComment) =>
//           setLocalComments((prev) => [...prev, newComment])
//         }
//       />
//     </div>
//   );
// };

// export default PostCard;
















// Open comment working

// import React, { useState } from "react";
// import LikeButton from "./LikeButton";
// import CommentSection from "./CommentSection";

// const PostCard = ({ post }) => {
//   if (!post) return null;
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const {
//     _id,
//     caption,
//     imageUrl,
//     image,
//     likes = [],
//     postedBy,
//     user,
//     createdAt,
//     comments = [],
//   } = post;

//   const finalImage = imageUrl || (image ? `https://res.cloudinary.com/duu9o7ak9/image/upload/v1750660000/mern-social-posts/${image}` : null);
//   const finalUser = postedBy?.username || user?.username || "Unknown User";

//   // 🟢 Track comments locally
//   const [localComments, setLocalComments] = useState(comments);

//   return (
//     <div key={_id} className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <span className="font-semibold text-lg">{finalUser}</span>
//         <span className="text-sm text-gray-400">
//           {new Date(createdAt).toLocaleString("en-IN")}
//         </span>
//       </div>

//       {/* Image */}
//       {finalImage && (
//         <img
//           src={finalImage}
//           alt="Post"
//           className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
//         />
//       )}

//       {/* Caption */}
//       {caption && (
//         <p className="text-gray-300 text-base mb-2">{caption}</p>
//       )}

//       {/* Likes */}
//       <LikeButton liked={false} count={likes.length} />

//       {/* Comments */}
//       <CommentSection
//         postId={post._id}
//         comments={localComments}
//         onCommentAdded={(newComment) =>
//           setLocalComments((prev) => [...prev, newComment])
//         }
//       />
//     </div>
//   );
// };

// export default PostCard;






// working 2





// import React, { useState } from "react";
// import LikeButton from "./LikeButton";
// import CommentSection from "./CommentSection";
// import { FiShare2 } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext";


// const PostCard = ({ post }) => {
//   if (!post) return null;
// const handleShare = () => {
//   const url = `${window.location.origin}/post/${_id}`;
//   navigator.clipboard.writeText(url);
//   alert("🔗 Post link copied to clipboard!");
// };

// const { userr } = useAuth(); // user contains the logged-in user details
// const currentUserId = userr?._id; // or user.id depending on your auth setup


//   // Destructure values from post
//   const {
//     _id,
//     caption,
//     imageUrl,
//     image,
//     likes = [],
//     postedBy,
//     user,
//     createdAt,
//     comments = [],
//   } = post;

//   // Use Cloudinary fallback if image is stored as filename
//   const finalImage = imageUrl || (image
//     ? `https://res.cloudinary.com/duu9o7ak9/image/upload/v1750660000/mern-social-posts/${image}`
//     : null);

//   const finalUser = postedBy?.username || user?.username || "Unknown User";

//   // 🟢 Manage comments locally to update instantly
//   const [localComments, setLocalComments] = useState(comments);

//   return (
//     <div className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <span className="font-semibold text-lg">{finalUser}</span>
//         <span className="text-sm text-gray-400">
//           {new Date(createdAt).toLocaleString("en-IN")}
//         </span>
//       </div>

//       {/* Post Image */}
//       {finalImage && (
//         <img
//           src={finalImage}
//           alt="Post"
//           className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
//         />
//       )}

//       {/* Caption */}
//       {caption && (
//         <p className="text-gray-300 text-base mb-2">{caption}</p>
//       )}

//       {/* Likes */}
//      <LikeButton
//   postId={_id}
//   liked={likes.includes(currentUserId)} // optional
//   count={likes.length}
//   onLikeToggle={(updatedLikes) => {
//     post.likes = updatedLikes; // update the current post's likes if needed
//   }}
// />


//       {/* Comments */}
//       <CommentSection
//         postId={_id}
//         comments={localComments}
//         onCommentAdded={(newComment) =>
//           setLocalComments((prev) => [...prev, newComment])
//         }
//       />

//       {/* Sharing post */}
//         <button
//           onClick={handleShare}
//           className="flex items-center text-sm text-gray-400 hover:text-white transition"
//         >
//           <FiShare2 className="mr-1" />
//           Share
//         </button>
//     </div>

//   );
// };

// export default PostCard;



// added post save feature 



import React, { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import { FiShare2 } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const PostCard = ({ post }) => {
  if (!post) return null;

  const { userr, token } = useAuth();
  const currentUserId = userr?._id;

  const {
    _id,
    caption,
    imageUrl,
    image,
    likes = [],
    postedBy,
    user,
    createdAt,
    comments = [],
  } = post;

  const finalImage =
    imageUrl ||
    (image
      ? `https://res.cloudinary.com/duu9o7ak9/image/upload/v1750660000/mern-social-posts/${image}`
      : null);

  const finalUser = postedBy?.username || user?.username || "Unknown User";

  const [localComments, setLocalComments] = useState(comments);
  const [saved, setSaved] = useState(false);

  // 🔄 Check if post is saved on initial load
  useEffect(() => {
    if (userr?.savedPosts?.includes(_id)) {
      setSaved(true);
    }
  }, [userr, _id]);

  const handleShare = () => {
    const url = `${window.location.origin}/post/${_id}`;
    navigator.clipboard.writeText(url);
    alert("🔗 Post link copied to clipboard!");
  };

  const handleSaveToggle = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/posts/${_id}/save`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSaved(res.data.saved);
    } catch (err) {
      console.error("❌ Error saving post:", err);
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg mb-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-lg">{finalUser}</span>
        <span className="text-sm text-gray-400">
          {new Date(createdAt).toLocaleString("en-IN")}
        </span>
      </div>

      {/* Post Image */}
      {finalImage && (
        <img
          src={finalImage}
          alt="Post"
          className="w-full rounded-lg mb-4 object-cover max-h-[600px]"
        />
      )}

      {/* Caption */}
      {caption && <p className="text-gray-300 text-base mb-2">{caption}</p>}

      {/* Like */}
      <LikeButton
        postId={_id}
        liked={likes.includes(currentUserId)}
        count={likes.length}
        onLikeToggle={(updatedLikes) => {
          post.likes = updatedLikes;
        }}
      />

      {/* Comment */}
      <CommentSection
        postId={_id}
        comments={localComments}
        onCommentAdded={(newComment) =>
          setLocalComments((prev) => [...prev, newComment])
        }
      />

      {/* Footer: Share + Save */}
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
        <button
          onClick={handleShare}
          className="flex items-center hover:text-white transition"
        >
          <FiShare2 className="mr-1" />
          Share
        </button>

        <button
          onClick={handleSaveToggle}
          className="flex items-center hover:text-white transition"
        >
          {saved ? <BsBookmarkFill /> : <BsBookmark />}
          <span className="ml-1">Save</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;

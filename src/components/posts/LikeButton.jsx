// import React, { useState } from "react";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const LikeButton = ({ postId, initialLikes = [], reload }) => {
//   const { user, token } = useAuth();
//   const [likes, setLikes] = useState(initialLikes);
//   const liked = likes.includes(user?._id);

//   const toggleLike = async () => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/posts/${postId}/like`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setLikes(res.data.likes); // update UI
//       if (reload) reload(); // optional: trigger feed refresh
//     } catch (error) {
//       console.error("❌ Failed to like/unlike post:", error);
//     }
//   };

//   return (
//     <div
//       onClick={toggleLike}
//       className="flex items-center gap-1 text-gray-600 dark:text-gray-300 cursor-pointer hover:scale-105 transition-transform"
//     >
//       {liked ? (
//         <FaHeart className="text-red-500" size={18} />
//       ) : (
//         <FiHeart size={18} />
//       )}
//       <span className="text-sm">{likes.length}</span>
//     </div>
//   );
// };

// export default LikeButton;



// working

// src/components/posts/LikeButton.jsx
// import React, { useState } from "react";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const LikeButton = ({ postId, initialLikes = [] }) => {
//   const { user, token } = useAuth();
//   const [likes, setLikes] = useState(initialLikes);

//   const userId = user?._id;
//   const isLiked = likes.includes(userId);

//   const toggleLike = async () => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/posts/${postId}/like`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setLikes(res.data.likes); // Update state with new likes from server
//     } catch (err) {
//       console.error("❌ Like toggle failed:", err);
//     }
//   };

//   return (
//     <div
//       onClick={toggleLike}
//       className={`flex items-center gap-1 cursor-pointer  transition-transform ${
//         isLiked ? "text-red-500" : "text-gray-400"
//       }`}
//     >
//       {isLiked ? <FaHeart size={18} /> : <FiHeart size={18} />}
//       <span>{likes.length}</span>
//     </div>
//   );
// };

// export default LikeButton;










import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const LikeButton = ({ postId, liked, count, onLikeToggle }) => {
  const { token } = useAuth();
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const handleToggle = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/posts/${postId}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update local state
      const updatedLikes = res.data.likes || [];
      setIsLiked(updatedLikes.includes(token?.userId)); // optional
      setLikeCount(updatedLikes.length);

      // Notify parent to update post state (optional)
      if (onLikeToggle) onLikeToggle(updatedLikes);
    } catch (err) {
      console.error("❌ Like toggle failed:", err);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-1 text-sm ${
        isLiked ? "text-red-500" : "text-gray-400"
      } hover:text-red-400 transition mb-2`}
    >
      <FiHeart className="mr-1" />
      {likeCount}
    </button>
  );
};

export default LikeButton;

// import React from 'react';
// import Sidebar from "../components/layout/Sidebar";

// import Feed from '../components/Feed';
// import UploadButton from '../components/UploadButton';

// const Home = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
//       {/* Left Sidebar */}
//       <aside className="w-1/5 border-r p-4 hidden md:block">
//         <Sidebar />
//       </aside>

//       {/* Center Feed */}
//       <main className="flex-1 p-4 max-w-2xl mx-auto">
//         <Feed />
//       </main>

//       {/* Right Upload Button */}
//       <div className="fixed bottom-6 right-6 md:static md:w-1/5 p-4">
//         <UploadButton />
//       </div>
//     </div>
//   );
// };

// export default Home;


// src/pages/Home.jsx
// import React, { useState } from "react";
// import Sidebar from "../components/layout/Sidebar";
// import Feed from "../components/Feed";
// import UploadButton from "../components/UploadButton";
// import PostUploader from "../components/posts/PostUploader";

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [reloadFeed, setReloadFeed] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
//       {/* Left Sidebar */}
//       <aside className="w-1/5 border-r p-4 hidden md:block">
//         <Sidebar />
//       </aside>

//       {/* Center Feed */}
//       <main className="flex-1 p-4 max-w-2xl mx-auto">
//         <Feed reload={reloadFeed} />
//       </main>

//       {/* Floating Upload Button */}
//       <div className="fixed bottom-6 right-6 md:static md:w-1/5 p-4">
//         <UploadButton onClick={() => setShowModal(true)} />
//           <Sidebar onUploadClick={() => setShowModal(true)} />

//       </div>

//       {/* Modal Uploader */}
//       {showModal && (
//         <PostUploader
//           onClose={() => setShowModal(false)}
//           onUpload={() => setReloadFeed(!reloadFeed)}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;





















// // src/pages/Home.jsx
// import React, { useState } from "react";
// import Sidebar from "../components/layout/Sidebar";
// import Feed from "../components/Feed";
// import UploadButton from "../components/UploadButton";
// import PostUploader from "../components/posts/PostUploader";
// import ProfileModal from "../components/ProfileModal";
// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [reloadFeed, setReloadFeed] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
//       {/* Left Sidebar */}
//       <aside className="w-1/5 border-r p-4 hidden md:block">
//         <Sidebar onUploadClick={() => setShowModal(true)} /> {/* ✅ HERE */}
//       </aside>

//       {/* Center Feed */}
//       <main className="flex-1 p-4 max-w-2xl mx-auto">
//         <Feed reload={reloadFeed} />
//       </main>

//       {/* Floating Upload Button */}
//       <div className="fixed bottom-6 right-6 md:static md:w-1/5 p-4">
//         <UploadButton onClick={() => setShowModal(true)} />
//       </div>

//       {/* Modal uploader */}
//       {showModal && (
//         <PostUploader
//           onClose={() => setShowModal(false)}
//           onUpload={() => {
//             setReloadFeed(!reloadFeed);
//             setShowModal(false); // also close after upload
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;









// home work

// import React, { useState } from "react";
// import Sidebar from "../components/layout/Sidebar";
// import Feed from "../components/Feed";
// import UploadButton from "../components/UploadButton";
// import PostUploader from "../components/posts/PostUploader";
// import ProfileModal from "../components/ProfileModal"; // ✅

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [reloadFeed, setReloadFeed] = useState(false);
//   const [showProfile, setShowProfile] = useState(false); // ✅ Profile modal state

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
//       {/* Left Sidebar */}
//       <aside className="w-1/5 border-r p-4 hidden md:block">
//         <Sidebar
//           onUploadClick={() => setShowModal(true)}
//           onProfileClick={() => setShowProfile(true)}  
//         />
//       </aside>

//       {/* Center Feed */}
//      <main className="flex-1 px-4 py-4 max-w-2xl mx-auto">

//         <Feed reload={reloadFeed} />
//       </main>

//       {/* Floating Upload Button */}
//       <div className="fixed bottom-6 right-6 md:static md:w-1/5 p-4">
//         <UploadButton onClick={() => setShowModal(true)} />
//       </div>

//       {/* Modal uploader */}
//       {showModal && (
//         <PostUploader
//           onClose={() => setShowModal(false)}
//           onUpload={() => {
//             setReloadFeed(!reloadFeed);
//             setShowModal(false);
//           }}
//         />
//       )}

//       {/* Profile Modal */}
//       {showProfile && (
//         <ProfileModal onClose={() => setShowProfile(false)} />
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useState } from "react";
// import Sidebar from "../components/layout/Sidebar";
// import Feed from "../components/Feed";
// import UploadButton from "../components/UploadButton";
// import PostUploader from "../components/posts/PostUploader";
// import ProfileModal from "../components/ProfileModal";

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [reloadFeed, setReloadFeed] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">

//       {/* Sidebar: visible on all screens, adapts layout inside */}
//       <Sidebar
//         onUploadClick={() => setShowModal(true)}
//         onProfileClick={() => setShowProfile(true)}
//       />

//       {/* Main Feed */}
//       <main className="flex-1 px-4 py-4 max-w-2xl mx-auto md:ml-[20%] lg:ml-64">
//         <Feed reload={reloadFeed} />
//       </main>

//       {/* Floating Upload Button (Mobile only) */}
//       {/* <div className="fixed bottom-6 right-6 md:hidden z-50">
//         <UploadButton onClick={() => setShowModal(true)} />
//       </div> */}

// <div className="hidden md:block md:w-1/5 p-4">
//   <UploadButton onClick={() => setShowModal(true)} />
// </div>

//       {/* Post Upload Modal */}
//       {showModal && (
//         <PostUploader
//           onClose={() => setShowModal(false)}
//           onUpload={() => {
//             setReloadFeed(!reloadFeed);
//             setShowModal(false);
//           }}
//         />
//       )}

//       {/* Profile Modal */}
//       {showProfile && (
//         <ProfileModal onClose={() => setShowProfile(false)} />
//       )}
//     </div>
//   );
// };

// export default Home;























import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Feed from "../components/Feed";
import UploadButton from "../components/UploadButton";
import PostUploader from "../components/posts/PostUploader";
import ProfileModal from "../components/ProfileModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [reloadFeed, setReloadFeed] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      
      {/* Sidebar (fixed width on md and above) */}
      <aside className="hidden md:block md:w-1/5 lg:w-64 border-r border-gray-200 dark:border-gray-700">
        <Sidebar
          onUploadClick={() => setShowModal(true)}
          onProfileClick={() => setShowProfile(true)}
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-2xl mx-auto px-4 py-6 md:ml-[20%] lg:ml-64">
        <Feed reload={reloadFeed} />
      </main>

      {/* Upload Button (shown on large screens in sidebar area) */}
      <div className="hidden md:block md:w-1/5 lg:w-64 p-4">
        <UploadButton onClick={() => setShowModal(true)} />
      </div>

      {/* Modal: Upload Post */}
      {showModal && (
        <PostUploader
          onClose={() => setShowModal(false)}
          onUpload={() => {
            setReloadFeed(!reloadFeed);
            setShowModal(false);
          }}
        />
      )}

      {/* Modal: Profile */}
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
    </div>
  );
};

export default Home;


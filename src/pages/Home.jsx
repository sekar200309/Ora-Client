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


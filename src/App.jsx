// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import SavedPosts from "./pages/SavedPosts";
// import ProtectedRoute from "./utils/ProtectedRoute";
// import Profile from "./pages/Profile";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} /> */}
//         <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         {/* <Route path="/profile/:userId" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
//        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/saved" element={<SavedPosts />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import SavedPosts from "./pages/SavedPosts";
// import Profile from "./pages/Profile";
// import LandingPage from "./pages/LandingPage"; // ✅ Your new landing page

// import ProtectedRoute from "./utils/ProtectedRoute";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* 🌐 Public Landing Page */}
//         <Route path="/" element={<LandingPage />} />

//         {/* 🔐 Protected Routes */}
//         <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/saved" element={<ProtectedRoute><SavedPosts /></ProtectedRoute>} />

//         {/* 📝 Public Auth Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* 🚫 Catch-all redirect */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


















// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SavedPosts from "./pages/SavedPosts";
import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from "./pages/Profile";
import Landing from "./pages/LandingPage"; // ✅ new landing page
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!token ? <Landing /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute><Home /></ProtectedRoute>}
        />
        <Route
          path="/saved"
          element={<ProtectedRoute><SavedPosts /></ProtectedRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

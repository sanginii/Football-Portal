import React, { useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
//Landing page
import Navbar from "./components/Home/Navbar.js";
import Hero from "./components/Home/Hero.js";
import MatchCenter from "./components/Home/MatchCenter.js";
import MatchSummaryPage from "./components/Fan/Matches/MatchSummary.js";
//Navbar pages
import News from "./components/Fan/News/News.js";
import Crowdfunding from "./components/CrowdFunding/Crowdfunding.js";
import Digitalfootballacademy from "./components/DigitalFootBallAcademy/Digitalfootballacademy.js";
import Sessions from "./components/DigitalFootBallAcademy/Sessions.js";
import ProductList from "./components/e-commerce/product-list.js";
import SignUp from "./components/Home/SignUp/index.js";
import Login from "./components/Home/Login/index.js";
//Clubs Tab
import ClubsMenu from "./components/Fan/SearchClubs/ClubsMenu.js";
import ClubTemp from "./components/Fan/SearchClubs/ClubTemp.js";
import PlayerProfile from "./components/Fan/Player-Profile/profile.js";
//Player role
import PlayerDashboard from "./components/Player/PlayerDashboard.js"; // Ensure this is imported correctly
import JobListings from "./components/Player/JobListings.js"; // Make sure this import is correct
import Tournament from "./components/Player/SearchTournament/Tournament.js";
import TournamentRegistration from "./components/Player/SearchTournament/TournamentRegistration";
//Club role
import ClubDashboard from "./components/Club/ClubDashboard/ClubDashboard.js";
import ClubPage from "./components/Club/ClubDashboard/ClubPage.js";
import JobListingForm from "./components/Club/JobListingForm.js";
import ScoutPlayer from "./components/Club/ScoutPlayer.js";
import PostNews from "./components/Club/PostNews.js";
import CreateCampaign from "./components/Club/CreateCampaign.js";
//sponsor role
import SponsorDashboard from "./components/Sponsor/SponsorDashboard.js";
//protected route
import ProtectRoute from "./components/ProtectRoute/index.js";

import axios from "axios";
const App = () => {
  const matchCenterRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Function to scroll to match center
  const scrollToMatchCenter = () => {
    if (matchCenterRef.current) {
      matchCenterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check for token and get user role
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Get user data using the token
          const res = await axios.get("http://localhost:8000/auth/protected", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { role } = res.data;
          console.log(res);
          setIsLoggedIn(true); // User is logged in
          setUserRole(role);
          console.log(isLoggedIn);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setIsLoggedIn(false);
          setUserRole(null); // Token is invalid or expired
        }
      } else {
        setIsLoggedIn(false);
        setUserRole(null); // No token found
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <>
      <Navbar
        scrollToMatchCenter={scrollToMatchCenter}
        loggedIn={isLoggedIn}
        userRole={userRole}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero
                scrollToMatchCenter={scrollToMatchCenter}
                loggedIn={isLoggedIn}
              />
              <div ref={matchCenterRef}>
                <MatchCenter />
              </div>
            </div>
          }
        />
        <Route
          path="/club-dashboard"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <ClubDashboard />
            </ProtectRoute>
          }
        />
        <Route
          path="/crowdfunding"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <Crowdfunding />
            </ProtectRoute>
          }
        />
        <Route
          path="/digitalfootballacademy"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <Digitalfootballacademy />
            </ProtectRoute>
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-listings" element={<JobListings />} />{" "}
        {/* Moved here */}
        <Route path="/register/:id" element={<TournamentRegistration />} />
        <Route
          path="/shop"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <ProductList />
            </ProtectRoute>
          }
        />
        <Route path="/clubs" element={<ClubsMenu />} />
        <Route path="/clubs/:clubName" element={<ClubPage />} />
        <Route path="/match-summary" element={<MatchSummaryPage />} />
        <Route
          path="/post-news"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <PostNews />
            </ProtectRoute>
          }
        />
        <Route
          path="/create-campaign"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <CreateCampaign />
            </ProtectRoute>
          }
        />
        <Route
          path="/player-dashboard"
          element={
            <ProtectRoute
              loggedIn={isLoggedIn}
              role={userRole}
              allowedRoles={["Player"]}
            >
              <PlayerDashboard />
            </ProtectRoute>
          }
        />
        <Route
          path="/tournaments"
          element={
            <ProtectRoute
              loggedIn={isLoggedIn}
              role={userRole}
              allowedRoles={["Club", "Player"]}
            >
              <Tournament />
              x``
            </ProtectRoute>
          }
        />
        <Route
          path="/sponsor-dashboard"
          element={
            <ProtectRoute
              loggedIn={isLoggedIn}
              role={userRole}
              allowedRoles={["Sponsor"]}
            >
              <SponsorDashboard />
            </ProtectRoute>
          }
        />
        <Route
          path="/sessions"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <Sessions />
            </ProtectRoute>
          }
        />
        <Route
          path="/club-temp"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <ClubTemp />
            </ProtectRoute>
          }
        />
        <Route path="/player/:playerName" element={<PlayerProfile />} />
        <Route
          path="/form"
          element={
            <ProtectRoute loggedIn={isLoggedIn} role={userRole}>
              <JobListingForm />
            </ProtectRoute>
          }
        />
        <Route
          path="/scout-players"
          element={
            <ProtectRoute loggedIn={isLoggedIn}>
              <ScoutPlayer />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;

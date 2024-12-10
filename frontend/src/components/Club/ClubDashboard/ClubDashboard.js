import React from "react";
import clubLogo from "../../../assets/sample-club-logo.png";
import nikeLogo from "../../../assets/nike.png";
import adidasLogo from "../../../assets/adidas.png";

import { Link } from "react-router-dom";

// Sample data for club name, logo, and sponsors
const clubInfo = {
  name: "East Bengal FC",
  logo: clubLogo,
  sponsors: [
    { name: "Nike", logo: nikeLogo },
    { name: "Adidas", logo: adidasLogo },
  ],
};

// Sample data for players

const ClubDashboard = () => {
  return (
    <div className="relative flex items-center w-full justify-center">
      {/* Background Image with opacity */}
      <div className="absolute inset-0 bg-background-job-form bg-cover bg-center opacity-50 z-0"></div>
      <div className="mt-5 min-h-screen w-[60vw] max-[902px]:w-full bg-gray-900 bg-opacity-90 text-gray-200 p-6 relative z-2">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 max-[541px]:flex-col max-[541px]:gap-5 ">
          {/* Club Logo and Name */}
          <div className="flex items-center gap-4">
            <img
              src={clubInfo.logo}
              alt="Club Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-3xl font-bold">{clubInfo.name}</h1>
          </div>

          {/* Create Crowdfunding Campaign Button */}
          <Link to="/crowdfunding">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300">
              View Crowdfunding Campaign
            </button>
          </Link>
        </header>

        {/* Sponsors Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Sponsors</h2>
          <div className="flex gap-6">
            {clubInfo.sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} Logo`}
                  className="w-20 h-20 object-contain mb-2"
                />
                <p className="text-lg">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Create Job Posting */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Create Job Posting</h3>
            <p className="mb-4">
              Post job listings for various roles in your club.
            </p>
            <Link
              to="/Form"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Create Job Posting
            </Link>
          </div>

          {/* Post News and Updates */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Post News & Updates</h3>
            <p className="mb-4">
              Keep your fans and sponsors updated with the latest news.
            </p>
            <Link
              to={{
                pathname: "/post-news",
                state: { clubName: clubInfo.name },
              }}
            >
              <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                Post News
              </button>
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">
              Create a new Campaign
            </h3>
            <p className="mb-4">Raise funds with the help of your fans.</p>

            {/* Create Crowdfunding Campaign */}
            <Link
              to={{
                pathname: "/create-campaign",
                state: {
                  clubName: clubInfo.name,
                  clubLogo: clubInfo.logo,
                },
              }}
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                Start Campaign
              </button>
            </Link>
          </div>
        </section>

        {/* Player Scouting Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Player Scouting</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p>
              Search for players, view their profiles, and add them to your
              scouting list.
            </p>
            {/* Button to Scout for Players */}
            <Link to="/scout-players">
              <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
                Scout Players
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClubDashboard;

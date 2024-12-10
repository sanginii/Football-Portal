import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const clubs = [
  {
    name: "East Bengal FC",
    address:
      "Emami East Bengal FC, Ground Floor, 687, Eastern Metropolitan Bypass, Anandapur, East Kolkata Twp, Kolkata, West Bengal 700107",
    founded: "01 Aug 1920",
    president: "NA",
    playersRegistered: 228,
    logo: "https://administrator.the-aiff.com/uploads/sm_EastBengalFClogowebp1_1680264050.png",
    image:
      "https://www.indiansuperleague.com/static-assets/images/club/overview/1102.png?v=101.38",
  },
  {
    name: "Mohammedan Sporting Club",
    address:
      "Mohammedan Sporting Club, 34, 1st Floor, Alimuddin Street, Kolkata, West Bengal 700016",
    founded: "01 Jan 1891",
    president: "NA",
    playersRegistered: 230,
    logo: "https://placehold.co/100x100",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Bengaluru Football Club",
    address:
      "Bengaluru FC, 103, 3rd Main, 3rd Cross, Domlur Layout, Bengaluru, Karnataka 560071",
    founded: "20 Jul 2013",
    president: "Parth Jindal",
    playersRegistered: 180,
    logo: "https://www.indiansuperleague.com/static-assets/images/club/538/656.png?v=101.39",
    image:
      "https://www.indiansuperleague.com/static-assets/images/club/overview/656.png?v=101.39",
  },
  {
    name: "Kerala Blasters Football Club",
    address: "Jawaharlal Nehru Stadium, Kaloor, Kochi, Kerala 682017",
    founded: "2014",
    president: "N/A",
    playersRegistered: 200,
    logo: "https://placehold.co/100x100",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Mumbai City FC",
    address:
      "Mumbai City FC, 1st Floor, Manish Commercial Centre, 90, M.G. Road, Ghatkopar (East), Mumbai, Maharashtra 400077",
    founded: "2014",
    president: "N/A",
    playersRegistered: 210,
    logo: "https://placehold.co/100x100",
    image: "https://placehold.co/600x400",
  },
];

const ClubsMenu = () => {
  const [clubsData, setClubsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubsData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/scrape/clubs"); // Adjust the URL as necessary
        setClubsData(response.data); // Set the data fetched from the backend
        setLoading(false); // Turn off loading state
      } catch (error) {
        console.error("Error fetching clubs data:", error);
        setLoading(false);
      }
    };

    fetchClubsData();
    setClubsData(clubsData);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this effect runs once on mount

  const [searchTerm, setSearchTerm] = useState("");

  // Filter clubs based on search term
  const filteredClubs = clubsData.filter((club) =>
    club.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-[92vh] bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative container mx-auto p-4 z-2">
        <h1 className="text-5xl font-bold mb-4 text-white">Find Clubs</h1>
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Clubs..."
            className="w-full text-black p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredClubs.map((club, index) => (
            <Link
              key={index}
              to={`/club-temp`}
              state={{ club }} // Link to the club page
              className="flex flex-col items-center border shadow-sm bg-card-background bg-opacity-100 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <img
                src={club.logoImg}
                alt={`${club.shortName} Logo`}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-white font-semibold text-lg text-center">
                {club.fullName}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsMenu;

import React from "react";
import clubLogo from "../../../assets/sample-club-logo.png";
import nikeLogo from "../../../assets/nike.png";
import adidasLogo from "../../../assets/adidas.png";
import { useLocation, Link } from "react-router-dom";
import { squads } from "./Squaddata";

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
  const location = useLocation();
  const clubInfoReceived = location.state?.club; // Access the club data passed from ClubsMenu

  // Fallback data if no club is passed
  if (!clubInfoReceived) {
    return <div>Club information not available.</div>;
  }
  console.log(clubInfoReceived);

  let clubName = clubInfoReceived.fullName;

  const clubSquad = squads.find((club) => club.name === clubName.toUpperCase());
  if (!clubSquad) {
    return <div>Club squad information not available for {clubName}.</div>;
  }
  console.log(clubSquad);
  let playerData = clubSquad.players;
  let coachData = clubSquad.coach;
  let forwards = playerData.forwards;
  let goalkeepers = playerData.goalkeepers;
  let defenders = playerData.defenders;
  let midfielders = playerData.midfielders;
  console.log(playerData, coachData);

  return (
    <div className="relative flex items-center w-full justify-center">
      {/* Background Image with opacity */}
      <div className="absolute inset-0 bg-background-job-form bg-cover bg-center opacity-50 z-0"></div>
      <div className="mt-5 min-h-screen w-[60vw] max-[902px]:w-full bg-gray-900 bg-opacity-90 text-gray-200 p-6 relative z-2">
        {/* Header Section */}
        <header className="flex justify-center items-center mb-10 max-[541px]:flex-col max-[541px]:gap-5 ">
          {/* Club Logo and Name */}
          <div className="flex items-center gap-4">
            <img
              src={clubInfoReceived.logoImg}
              alt="Club Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              {clubInfoReceived.fullName}
            </h1>
          </div>
        </header>

        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-3xl font-normal mb-2 text-center">Venue</h1>
          <img
            src={clubInfoReceived.bannerImg}
            className="border rounded-lg sm:w-1/2"
            alt="not loading"
          />
          <h1 className="mt-1 text-sm text-center">{clubInfoReceived.venue}</h1>
        </div>

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

        {/* Team Section */}
        <section className="mb-2">
          <h2 className="text-6xl font-semibold mb-2">Our Team</h2>
          <div className="category flex flex-col w-full">
            <h1 className="text-3xl my-4 text-left">Forwards</h1>
            <div className="flex gap-5 flex-wrap">
              {forwards.map((player) => {
                return (
                  <Link
                    key={player.id}
                    to={`/player/${encodeURIComponent(
                      player.name.toUpperCase()
                    )}`}
                  >
                    <div className="player-card max-w-[15rem] flex-col flex-wrap border border-gray-600 rounded p-5">
                      <h1 className="text-md text-center">{player.name}</h1>
                      <img
                        src={player.image}
                        className="text-md"
                        alt={player.name}
                      ></img>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="category flex flex-col w-full">
            <h1 className="text-3xl my-4 text-left">Midfielders</h1>
            <div className="flex flex-wrap gap-5">
              {midfielders.map((player) => {
                return (
                  <Link
                    key={player.id}
                    to={`/player/${encodeURIComponent(
                      player.name.toUpperCase()
                    )}`}
                  >
                    <div className="player-card max-w-[15rem] flex-col flex-wrap border border-gray-600 rounded p-5">
                      <h1 className="text-md text-center">{player.name}</h1>
                      <img
                        src={player.image}
                        className="text-md"
                        alt={player.name}
                      ></img>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="category flex flex-col w-full">
            <h1 className="text-3xl my-4 text-left">Defenders</h1>
            <div className="flex gap-5 flex-wrap">
              {defenders.map((player) => {
                return (
                  <Link
                    key={player.id}
                    to={`/player/${encodeURIComponent(
                      player.name.toUpperCase()
                    )}`}
                  >
                    <div className="player-card max-w-[15rem] flex-col flex-wrap border border-gray-600 rounded p-5">
                      <h1 className="text-md text-center">{player.name}</h1>
                      <img
                        src={player.image}
                        className="text-md"
                        alt={player.name}
                      ></img>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="category flex flex-col w-full">
            <h1 className="text-3xl my-4 text-left">Goalkeepers</h1>
            <div className="flex gap-5 flex-wrap">
              {goalkeepers.map((player) => {
                return (
                  <Link
                    key={player.id}
                    to={`/player/${encodeURIComponent(
                      player.name.toUpperCase()
                    )}`}
                  >
                    <div className="player-card max-w-[15rem] flex-col flex-wrap border border-gray-600 rounded p-5">
                      <h1 className="text-md text-center">{player.name}</h1>
                      <img
                        src={player.image}
                        className="text-md"
                        alt={player.name}
                      ></img>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl my-4 text-left">Coaches</h1>
            <Link
              key={coachData.id}
              to={`/player/${encodeURIComponent(coachData.name.toUpperCase())}`}
            >
              <div className="card max-w-[15rem] flex flex-wrap border border-gray-600 rounded p-5">
                <h1 className="text-md ">{coachData.name}</h1>
                <img
                  src={coachData.image}
                  className="rounded text-md"
                  alt={coachData.name}
                ></img>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClubDashboard;

{
  /* <Link
    key={player.id} to={`/player/${encodeURIComponent(player.name.toUpperCase())}`}>
    <div className="bg-gray-800 p-4 cursor-pointer hover:bg-slate-700 transition-all rounded-lg shadow-lg flex flex-col items-center">
        <img
            src={player.image}
            alt={`${player.name}'s Profile`}
            className="w-[15rem] h-[15rem] object-contain mb-2"
        />
        <h3 className="text-lg font-semibold">{player.name}</h3>
        <p className="text-gray-400">{player.position}</p>
    </div>
</Link> */
}

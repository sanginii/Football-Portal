import { squads } from "../SearchClubs/Squaddata";

const data = squads.flatMap((squad) =>
  Object.values(squad.players)
    .flat()
    .map((player) => ({
      id: player.jerseyNumber,
      name: player.name,
      image: player.image,
      club: squad.name,
      position: player.position || "Unknown",
      goals: player.goals || 0,
      jerseyNumber: player.jerseyNumber,
      minutes: player.matchesPlayed * 90,
      goalConversionPercentage: player.goals
        ? ((player.goals / player.shotsOnTarget) * 100).toFixed(2)
        : 0,
      appearances: player.matchesPlayed,
      assists: player.assists || 0,
      age: player.age || "Unknown",
      country: "IN",
      height: player.height || "Unknown",
      fullImage: player.image,
      stats: {
        appearances: player.matchesPlayed,
        minutes: player.matchesPlayed * 90,
        cleanSheets: player.cleanSheets || 0,
        recoveries: player.recoveries || 0,
        tackles: player.tackles || 0,
        interceptions: player.interceptions || 0,
        clearances: player.clearances || 0,
        blocks: player.blocks || 0,
        duelsWon: player.duelsWon || 0,
        aerialDuelsWon: player.aerialDuelsWon || 0,
        passesPerGame: player.passesPerGame || 0,
        passingAccuracy: player.passingAccuracy || 0,
        successfulPasses: player.successfulPasses || 0,
        touches: player.touches || 0,
        yellowCards: player.yellowCards || 0,
        redCards: player.redCards || 0,
        fouls: player.fouls || 0,
        goals: player.goals || 0,
        assists: player.assists || 0,
        chancesCreated: player.chancesCreated || 0,
      },
    }))
);

export { data };

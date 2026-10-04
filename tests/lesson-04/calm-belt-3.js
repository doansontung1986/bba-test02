function upgradeCrew(pirates) {
  const awakenedPirates = pirates.map((pirate) => {
    return {
      name: pirate.name.toUpperCase(),
      bounty: pirate.bounty * 2,
      strength: pirate.strength * 1.5,
    };
  });

  const monsterTrioCandidates = awakenedPirates.filter(
    (pirate) => pirate.strength > 500,
  );

  return monsterTrioCandidates;
}

function printBountyLeaderboard(crewList) {
  const sortedCrew = [...crewList];
  sortedCrew.sort((a, b) => b.bounty - a.bounty);

  for (let i = 0; i < sortedCrew.length; i++) {
    let badge;

    if (i === 0) {
      badge = "🥇";
    } else if (i === 1) {
      badge = "🥈";
    } else if (i === 2) {
      badge = "🥉";
    } else {
      badge = "  ";
    }
    console.log(
      badge +
        " " +
        `${i + 1}. ${sortedCrew[i].name} - Bounty: ${sortedCrew[i].bounty}`,
    );
  }
}

const pirates = [
  {
    name: "Captain Jack",
    bounty: 1000,
    strength: 600,
  },
  {
    name: "First Mate Anne",
    bounty: 800,
    strength: 350,
  },
  {
    name: "Gunner Bill",
    bounty: 600,
    strength: 200,
  },
  {
    name: "Navigator Lucy",
    bounty: 400,
    strength: 150,
  },
  {
    name: "Cook Sam",
    bounty: 300,
    strength: 100,
  },
  {
    name: "Monster Trio Candidate",
    bounty: 1200,
    strength: 700,
  },
];

const monsterTrioCandidates = upgradeCrew(pirates);
console.log("Monster Trio Candidates:", monsterTrioCandidates);
console.log("------------------------------");
console.log("Bounty Leaderboard:");
printBountyLeaderboard(pirates);

let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];
const TableBody = document.getElementById("tablebody");
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const Date = document.querySelector("#date").value;
  const HomeTeam = document.querySelector("#home-team").value;
  const AwayTeam = document.querySelector("#away-team").value;
  const Score = document.querySelector("#score").value;

  const newMatch = {
    date: Date,
    home_team: HomeTeam,
    away_team: AwayTeam,
    score: Score,
  };

  matchResults.push(newMatch);

  addMatchToTable(newMatch);
});

matchResults.forEach(function (item) {
  var row = document.createElement("tr");

  var dateCell = document.createElement("td");
  dateCell.textContent = item.date;
  row.appendChild(dateCell);

  var home_teamCell = document.createElement("td");
  home_teamCell.textContent = `${item.home_team} VS ${item.away_team}`;
  row.appendChild(home_teamCell);

  var scoreCell = document.createElement("td");
  scoreCell.textContent = item.score;
  row.appendChild(scoreCell);

  var locationCell = document.createElement("td");
  locationCell.textContent = item.location;
  row.appendChild(locationCell);

  TableBody.appendChild(row);
});

const tableData = [
  {
    team: "Liverpool",
    played: 20,
    win: 13,
    draw: 6,
    loss: 1,
    goals_for: 43,
    goals_against: 18,
    goal_difference: 25,
    points: 45,
  },
  {
    team: "Aston Villa",
    played: 20,
    win: 13,
    draw: 3,
    loss: 4,
    goals_for: 43,
    goals_against: 27,
    goal_difference: 16,
    points: 42,
  },
  {
    team: "Manchester City",
    played: 19,
    win: 12,
    draw: 4,
    loss: 3,
    goals_for: 45,
    goals_against: 21,
    goal_difference: 24,
    points: 40,
  },
  {
    team: "Arsenal",
    played: 20,
    win: 12,
    draw: 4,
    loss: 4,
    goals_for: 37,
    goals_against: 20,
    goal_difference: 17,
    points: 40,
  },
  {
    team: "Tottenham Hotspur",
    played: 20,
    win: 12,
    draw: 3,
    loss: 5,
    goals_for: 42,
    goals_against: 29,
    goal_difference: 13,
    points: 39,
  },
  {
    team: "West Ham United",
    played: 20,
    win: 10,
    draw: 4,
    loss: 6,
    goals_for: 33,
    goals_against: 30,
    goal_difference: 3,
    points: 34,
  },
  {
    team: "Brighton",
    played: 20,
    win: 8,
    draw: 7,
    loss: 5,
    goals_for: 38,
    goals_against: 33,
    goal_difference: 5,
    points: 31,
  },
  {
    team: "Manchester United",
    played: 20,
    win: 10,
    draw: 1,
    loss: 9,
    goals_for: 22,
    goals_against: 27,
    goal_difference: -5,
    points: 31,
  },
];

//add tableData to html table
var TableBody = document.getElementById("tablebody");

tableData.forEach(function (item) {
  var row = document.createElement("tr");

  var teamCell = document.createElement("td");
  teamCell.textContent = item.team;
  row.appendChild(teamCell);

  var playedCell = document.createElement("td");
  playedCell.textContent = item.played;
  row.appendChild(playedCell);

  var winCell = document.createElement("td");
  winCell.textContent = item.win;
  row.appendChild(winCell);

  var drawCell = document.createElement("td");
  drawCell.textContent = item.draw;
  row.appendChild(drawCell);

  var lossCell = document.createElement("td");
  lossCell.textContent = item.loss;
  row.appendChild(lossCell);

  var goals_forCell = document.createElement("td");
  goals_forCell.textContent = item.goals_for;
  row.appendChild(goals_forCell);

  var goals_againstCell = document.createElement("td");
  goals_againstCell.textContent = item.goals_against;
  row.appendChild(goals_againstCell);

  var goal_differenceCell = document.createElement("td");
  goal_differenceCell.textContent = item.goal_difference;
  row.appendChild(goal_differenceCell);

  var pointsCell = document.createElement("td");
  pointsCell.textContent = item.points;
  row.appendChild(pointsCell);
  TableBody.appendChild(row);
});

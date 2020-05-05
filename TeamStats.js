
const team = {
  _players:[
    {
      firstName:'Pablo',
      lastName:'Sanchez',
      age: 11
    }
  ],
  
  _games:[
    {
      opponent:'Broncos',
      teamPoints: 42,
      opponentPoints:27
    }
  ],
 get players() {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
    addGame(opponentName, teamPoints, opponentPoints) {
      let game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
    };
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Lesle', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Bads', 19, 67);
team.addGame('Goods', 39, 57);
team.addGame('Titans', 99, 64);

console.log(team.players);
console.log(team.games);


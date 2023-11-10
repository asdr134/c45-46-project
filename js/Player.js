class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0
    this.score = 0
  }

  getCount() {
    //.ref() gives the path from where we have to read the data in the database.
    var playerCountRef = database.ref("playerCount")
    // .on() is used to read the data continously from the database.
    playerCountRef.on("value", data => {
      playerCount = data.val()
      //.val() is used to extact the data in a readable format.
    })
  }

  //write the playerCount into the database
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    })
  }


  addPlayer() {
    var playerIndex = "players/player" + this.index
    if (this.index == 1) {
      this.positionX = width / 2 - 100
    }
    else {
      this.positionX = width / 2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score

    })

  }



}
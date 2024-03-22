const gameDiv = document.getElementById("gameToggle")
let gamePlaying = false

gameDiv.addEventListener("click", () => gamePlaying ? (closeGame(), gamePlaying = false) : (openGame(), gamePlaying = true));


    function openGame(){
        gameDiv.innerHTML = `
        Close the game X
        <div className="game">
        <iframe
          className="center-vertically"
          src="http://backend.joelsoft.eu:1111"
          title="make-your-game"
        />
      </div>`
    }
    function closeGame(){
        gameDiv.innerHTML = `Play leprechaun the game!`
    }
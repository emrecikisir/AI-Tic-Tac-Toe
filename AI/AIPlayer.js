const getRandomMove = (board) => {
    const availableMoves = [];
  
    // Loop through the board to find empty squares
    board.forEach((cell, index) => {
      if (cell === null) { // null indicates an empty square
        availableMoves.push(index);
      }
    });
  
    // If there are no available moves, return null
    if (availableMoves.length === 0) return null;
  
    // Pick a random index from the available moves
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };
  
  export { getRandomMove };
  
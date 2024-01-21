import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import GameBoard from '../board/GameBoard';
import Square from '../board/Square'

const GameScreen = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handlePress = (index) => {
    if (board[index] || isGameOver) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      Alert.alert(`Player ${currentPlayer} wins!`);
      setIsGameOver(true);
      setWinner(currentPlayer);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board, player) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setIsGameOver(false);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      {!isGameOver && (
        <Text style={styles.status}>Current Player: {currentPlayer}</Text>
      )}
      {isGameOver && (
        <Text style={styles.status}>{winner ? `Player ${winner} Wins!` : "It's a Draw!"}</Text>
      )}

      <GameBoard board={board} onSquarePress={handlePress} />

      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GameScreen;
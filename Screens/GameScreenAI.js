import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import GameBoard from '../board/GameBoard';
import { getRandomMove } from '../AI/AIPlayer'; 
const GameScreenAI = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('Human');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === 'AI' && !isGameOver) {
      const aiMove = getRandomMove(board);
      if (aiMove !== null) {
        makeMove(aiMove, 'AI');
      }
    }
  }, [currentPlayer, board]);

  const handlePress = (index) => {
    if (board[index] || isGameOver) {
      return;
    }
    makeMove(index, 'Human');
  };

  const makeMove = (index, player) => {
    const newBoard = [...board];
    newBoard[index] = player === 'Human' ? 'X' : 'O';
    setBoard(newBoard);

    if (checkWinner(newBoard, player === 'Human' ? 'X' : 'O')) {
      Alert.alert(`Player ${player} wins!`);
      setIsGameOver(true);
      setWinner(player);
      return;
    }

    setCurrentPlayer(player === 'Human' ? 'AI' : 'Human');
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
    setCurrentPlayer('Human');
    setIsGameOver(false);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe - AI Mode</Text>
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

export default GameScreenAI;

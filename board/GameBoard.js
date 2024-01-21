import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

const GameBoard = ({ board, onSquarePress }) => {
  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <Square key={index} value={value} onPress={() => onSquarePress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});

export default GameBoard;

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={[styles.cellText, value === 'X' ? styles.xText : styles.oText]}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: '33%',
    height: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  xText: {
    color: 'red',
  },
  oText: {
    color: 'blue',
  },
});
export default Square;

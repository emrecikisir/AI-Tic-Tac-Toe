import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.author}>by Emre Cikisir</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Game')} // Adjust as needed for your navigation
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AI Player')} // Navigate to GameScreenAI
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Play With AI</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  author: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

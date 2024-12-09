import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Scoreboard({ playerScore, computerScore }) {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>You: {playerScore}</Text>
      <Text style={styles.scoreText}>Computer: {computerScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Result({ result, playerChoice, computerChoice }) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <Text style={styles.choiceText}>You: {playerChoice}</Text>
      <Text style={styles.choiceText}>Computer: {computerChoice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF5722",
  },
  choiceText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

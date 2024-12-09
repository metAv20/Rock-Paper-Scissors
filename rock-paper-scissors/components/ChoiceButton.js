import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ChoiceButton({ choice, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(choice)}>
      <Text style={styles.text}>{choice}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

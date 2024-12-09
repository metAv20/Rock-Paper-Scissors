import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import ChoiceButton from "./components/ChoiceButton";
import Result from "./components/Result";
import Scoreboard from "./components/Scoreboard";
import { choices, getComputerChoice, getResult } from "./utils/gameLogic";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleChoice = (choice) => {
    const computer = getComputerChoice();
    const gameResult = getResult(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    if (gameResult === "You Win!") {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (gameResult === "You Lose!") {
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Scoreboard playerScore={playerScore} computerScore={computerScore} />
      <Result
        result={result}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      />
      <View style={styles.buttonsContainer}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} onPress={handleChoice} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});

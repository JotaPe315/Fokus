import { Text, StyleSheet } from "react-native";

export const TimerFokus = ({ seconds }) => {
  return (
    <Text style={styles.timer}>
          { new Date(seconds * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
        </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});
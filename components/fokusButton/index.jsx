import { Pressable, Text, StyleSheet } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline }) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "center",
    width: "80%",
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#B872FF",
    borderWidth: 2,
  },
  outlineButtonText: {
    color: "#B872FF",
  },
});
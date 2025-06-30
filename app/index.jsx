import {useState} from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FokusButton } from "../components/fokusButton/index.jsx";
import { ActionButton } from "../components/actionButton/index.jsx";
import { TimerFokus } from "../components/timerFokus/index.jsx";
const pomodoro = [
    {
      id: 'focus',
      initialValue: 25 * 60,
      image: require("./foco.png"),
      display: 'Foco'
    },
    {
      id: 'short',
      initialValue: 5 * 60,
      image: require("./short.png"),
      display: 'Pausa curta'
    },
    {
      id: 'long',
      initialValue: 15 * 60,
      image: require("./long.png"),
      display: 'Pausa longa'
    }
]

export default function Index() {

  const[timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>

      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
          
        </View>
        <TimerFokus
          seconds={timerType.initialValue}
        />
        <FokusButton />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    borderRadius: 32,
    width: "80%",
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  context:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  footer: {
    padding: 16,
    alignItems: "center",
    width: "80%"
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: "center",
    fontFamily: "Montserrat",
  } 
});

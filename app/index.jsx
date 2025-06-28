import {useState} from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

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
            <Pressable 
            key={p.id}
            style={ timerType.id === p.id ? styles.contextButtonActive : null }
            onPress={() => setTimerType(p)}
            >
            <Text style={styles.contextButtonText}>
              {p.display}
            </Text>
          </Pressable>
          ))}
          
        </View>
        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
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
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"

  },
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat",
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

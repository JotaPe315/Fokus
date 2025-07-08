import {useRef, useState} from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FokusButton } from "../components/FokusButton/index.jsx";
import { ActionButton } from "../components/actionButton/index.jsx";
import { TimerFokus } from "../components/timerFokus/index.jsx";
import { IconPlay, IconPause } from "../components/Icons/index.jsx";
const pomodoro = [
    {
      id: 'focus',
      initialValue: 25 * 60, // 25 minutos em segundos
      image: require("../assets/images/foco.png"),
      display: 'Foco'
    },
    {
      id: 'short',
      initialValue: 5 * 60, // 5 minutos em segundos
      image: require("../assets/images/short.png"),
      display: 'Pausa curta'
    },
    {
      id: 'long',
      initialValue: 15 * 60, // 15 minutos em segundos
      image: require("../assets/images/long.png"),
      display: 'Pausa longa'
    }
]

export default function Pomodoro() {

  const [timerType, setTimerType] = useState(pomodoro[0]);

  const [timerButton, setTimerButton] = useState(false);

  const [seconds, setSeconds] = useState(timerType.initialValue);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerButton(false);

    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue); // Reseta os segundos para o valor inicial do novo timer
    clear(); // Limpa o timer atual se houver

  }

  const toggleTimer = () => {
    if (timerRef.current) {
      // pausar
      clear();
      return;
    }

    setTimerButton(true);

    const id = setInterval(() => {
      setSeconds(oldValue => {
        if (oldValue <= 0) {
          clear();
          return timerType.initialValue; // Reseta o timer para o valor inicial
        }
        return oldValue - 1;
      });

    }, 1000);
    timerRef.current = id;
  }

  return (
    <View style={styles.container}>

      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
            
          ))}
          
        </View>
        <TimerFokus
          seconds={seconds}
        />
        <FokusButton
          title={timerButton ? "Pausar" : "Começar"}
          icon={timerButton ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}

        />
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
    alignItems: "center",
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

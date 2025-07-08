import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton/index.jsx";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/LogoFokus.png")}
      />
      <Text style={styles.title}>
        Otimize sua{"\n"} produtividade,{"\n"}
        <Text style={styles.bold}>
          mergulhe no que{"\n"} importa.
        </Text>
      </Text>
      <Image source={require("../assets/images/ImgHome.png")} />

      <FokusButton
        title="Quero começar!"
        onPress={() => router.navigate("/pomodoro")}
      />

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
    gap: 25
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Unbounded",
  },
  bold: {
    fontWeight: "bold",
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
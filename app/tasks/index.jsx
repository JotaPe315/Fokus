import { StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import TaskItem from "../../components/TaskItem";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>
          Lista de Tarefas:
        </Text>
        <View style={styles.taskList}>
          <TaskItem
            completed
            text="Estudar Inglês"
          />
          <TaskItem
            text="Estudar Python"
          />
          <TaskItem
            completed
            text="Estudar JavaScript"
          />
          <TaskItem
            text="Academia"
          />
        </View>
        <FokusButton
          title="Adicionar Tarefa"
          icon={<IconPlus />}
          outline
          onPress={() => router.navigate("/add-task")}
        />;
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
    backgroundColor: "#021123",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,

  },
  taskList: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingVertical: 10,
    paddingBottom: 40,
    gap: 8,
  },
  footer: {
    paddingBottom: 40,
    alignItems: "center",
    width: "80%",
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: "center",
    fontFamily: "Montserrat",
  }
});

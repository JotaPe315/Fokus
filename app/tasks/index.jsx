import { FlatList, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import TaskItem from "../../components/TaskItem";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";
export default function Tasks() {

  const { tasks } = useTaskContext()

  return (
    <View style={styles.container}>
      <View style={styles.taskList}>
        {/* {tasks.map(t => {
            return (
              <TaskItem
                completed={t.completed}
                text={t.description}
                key={t.id}
              />
            )
          })} */}
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem
            completed={item.completed}
            text={item.description}
            key={item.id}
          />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListHeaderComponent={<Text style={styles.text}>Lista de Tarefas:</Text>}
          ListFooterComponent={<View style={{ marginTop: 16, alignItems: "center" }}>
            <FokusButton
              title="Adicionar Tarefa"
              icon={<IconPlus />}
              outline
              onPress={() => router.navigate("/add-task")}
            />
          </View>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 26,
    marginBottom: 16


  },
  taskList: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingVertical: 10,
    paddingBottom: 40,
    gap: 8,
  },
});

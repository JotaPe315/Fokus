import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCircle, IconDelete, IconEdit } from "../Icons";

const TaskItem = ({ completed, text, onToggleComplete, onPressEdit, onPressDelete }) => {

  const cardStyle = completed ? [styles.card, styles.cardCompleted] : styles.card;

  return (
      <View style={cardStyle}>
        <Pressable onPress={onToggleComplete}>
          <IconCircle checked={completed} />
        </Pressable>

      <Text style={styles.text}>
        {text}
      </Text>

      <Pressable onPress={onPressEdit}>
        <IconEdit />
      </Pressable>

      <Pressable onPress={onPressDelete}>
        <IconDelete />
      </Pressable>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: "row",
    backgroundColor: "#98A0A8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8

  },
  cardCompleted: {
    backgroundColor: "#0F725C",
  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskItem;
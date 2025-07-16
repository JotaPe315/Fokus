import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";
import { useState } from "react";
import { router } from "expo-router";

export default function AddTask() {

    const [description, setDescription] = useState()

    const { addTask } = useTaskContext()

    const submitTask = () => {
        if (!description) {
            return
        }
        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return (
        <KeyboardAvoidingView
            style = {{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Adicionar Tarefa:
                    </Text>
                    <View style={styles.formContainer}>

                        <Text style={styles.titleForm}>
                            Em que você está{'\n'}trabalhando?
                        </Text>

                        <TextInput
                            style={styles.inputContainer}
                            numberOfLines={10}
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                        />
                        <View style={styles.button}>
                            <Pressable onPress={submitTask}>
                                <IconSave />
                            </Pressable>
                        </View>
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center',
        gap: 16,
    },
    title: {
        fontSize: 26,
        color: '#FFF',
        fontWeight: 'bold',
    },
    formContainer: {
        width: '90%',
        backgroundColor: '#98A0A8',
        padding: 16,
        borderRadius: 8,
        gap: 30,

    },
    titleForm: {
        fontSize: 18,
        color: '#021A23',
        fontWeight: 600,
    },
    inputContainer: {

        backgroundColor: '#FFF',
        padding: 16,
        textAlignVertical: 'top',
        borderRadius: 8,
        height: 100
    },
    button: {
        flexDirection: "row",
        justifyContent: "flex-end",

    }

})
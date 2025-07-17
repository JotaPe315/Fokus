import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([])
    const [IsLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('fokus-tasks');
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(loadedData)
                setIsLoaded(true)
            } catch (e) {
                // error reading value
            }
        };
        getData()


    }, [])

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem('fokus-tasks', jsonValue);
            } catch (e) {
                // saving error
            }
        };
        if (IsLoaded) {
            storeData(tasks);

        }


    }, [tasks])

    const addTask = (description) => {
        console.log("Tarefa nova")
        setTasks(oldState => {
            return [
                ...oldState,
                {
                    description,
                    id: oldState.length + 1
                }
            ]
        })
        //chamar persistência
    }

    const toggleTaskCompleted = (id) => {
        setTasks(oldState => {
            return oldState.map(t => {
                if (t.id == id) {
                    t.completed = !t.completed
                }
                return t
            })
        })
        //chamar persistência
    }

    const deleteTask = (id) => {
        setTasks(oldState => {
            return oldState.filter(t => t.id != id)
        })
        //chamar persistência
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleTaskCompleted,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )

}
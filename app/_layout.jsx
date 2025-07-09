import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#021123',
          },
          headerTintColor: '#FFF',
          drawerStyle: {
            backgroundColor: '#021123'
          },
          drawerLabelStyle: {
            color: '#FFF',
            fontSize: 18,
            fontFamily: 'Montserrat',
          }
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            title: '',
            drawerLabel: 'Timer',
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            title: '',
            drawerLabel: 'Lista de Tarefas',
          }}
        />
        <Drawer.Screen
          name="add-task/index"
          options={{
            title: '',
            drawerItemStyle: { display: 'none' },
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#FFF"
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate('/tasks')}
                />
              );
            }
          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}

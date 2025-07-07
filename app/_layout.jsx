import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

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
            drawerItemStyle: { display: 'none' },
          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}

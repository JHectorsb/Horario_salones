import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HorarioPersonal from "./screens/HorarioPersonal";
import SalonesDisponibles from "./screens/SalonesDisponibles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#1f1f1f" },
          tabBarActiveTintColor: "#4caf50",
          tabBarInactiveTintColor: "gray"
        }}
      >
        <Tab.Screen 
          name="Horario Personal" 
          component={HorarioPersonal} 
        />
        <Tab.Screen 
          name="Salones sin clase" 
          component={SalonesDisponibles} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import {horas, dias, horario} from "../horas/horarios.js";

const screenWidth = Dimensions.get("window").width;


export default function HorarioPersonal() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          {/* Header */}
          <View style={styles.row}>
            <Text style={styles.headerCell}>Hora</Text>
            {dias.map((dia) => (
              <Text key={dia} style={styles.headerCell}>{dia}</Text>
            ))}
          </View>

          {/* Filas */}
          {horas.map((hora) => (
            <View key={hora} style={styles.row}>
              <Text style={styles.hourCell}>{hora}</Text>
              {dias.map((dia) => (
                <Text key={dia + hora} style={styles.cell}>
                  {horario[dia]?.[hora] || ""}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const cellWidth = screenWidth / 6; 
// 1 columna de Hora + 5 días = 6 columnas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  row: {
    flexDirection: "row",
  },
  headerCell: {
    width: cellWidth,
    padding: 8,
    backgroundColor: "#1f1f1f",
    color: "white",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#333",
    textAlign: "center"
  },
  hourCell: {
    width: cellWidth,
    padding: 8,
    color: "white",
    borderWidth: 1,
    borderColor: "#333",
    textAlign: "center"
  },
  cell: {
    width: cellWidth,
    padding: 8,
    color: "white",
    borderWidth: 1,
    borderColor: "#333",
    textAlign: "center"
  }
});
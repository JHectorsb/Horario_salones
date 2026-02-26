import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const horas = [
  "7-8", "8-9", "9-10", "10-11", "11-12",
  "12-13", "13-14", "14-15", "15-16",
  "16-17", "17-18"
];

const dias = ["Lun", "Mar", "Mie", "Jue", "Vie"];

const horario = {
  "Lun": {
    "12-13": "Modelos Probabilistas",
    "13-14": "Modelos Probabilistas",
    "14-15": "Administración",
    "16-17": "Paradigmas Prog.",
    "17-18": "Paradigmas Prog."
  },
  "Mar": {
    "7-8": "Ética Profesional",
    "8-9": "Ética Profesional",
    "9-10": "Prog. Web",
    "10-11": "Prog. Web",
    "15-16": "Sociología",
    "16-17": "Lab Paradigmas",
    "17-18": "Lab Paradigmas"
  },
  "Mie": {
    "7-8": "BD II",
    "12-13": "Modelos Prob.",
    "13-14": "Administración",
    "14-15": "Administración",
    "16-17": "Paradigmas"
  },
  "Jue": {
    "7-8": "Ética Profesional",
    "9-10": "Prog. Web",
    "10-11": "Prog. Web",
    "14-15": "Sociología",
    "15-16": "Sociología",
    "16-17": "Lab Paradigmas"
  },
  "Vie": {
    "7-8": "BD II",
    "8-9": "BD II"
  }
};

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
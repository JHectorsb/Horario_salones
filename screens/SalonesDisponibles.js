import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const horas = [
  "7-8", "8-9", "9-10", "10-11", "11-12",
  "12-13", "13-14", "14-15", "15-16",
  "16-17", "17-18", "18-19", "19-20"
];

const dias = ["Lun", "Mar", "Mie", "Jue", "Vie"];

const horario = {
  "Lun": {
    "7-8": "b6",
    "8-9": "b6",
    "9-10": "b4,b7,b3,b6",
    "10-11": "b4,b7,b6",
    "11-12": "b4,b7,b6",
    "12-13": "b4,b7,b3,b6",
    "13-14": "b4,b3,b6",
    "14-15": "b4,b7",
    "15-16": "b4,b7",
    "16-17": "b4,b7,b6",
    "17-18": "b4,b7,b6",
    "18-19": "b4,b7,b6",
    "19-20": "b4,b7,b3,b6"
  },
  "Mar": {
    "7-8": "b7,b6",
    "8-9": "b7,b6",
    "9-10": "b6",
    "10-11": "b6",
    "11-12": "b4,b6",
    "12-13": "b4,b6",
    "13-14": "b4,b7,b6",
    "14-15": "b4,b6",
    "15-16": "b3,b6",
    "16-17": "b4,b7,b3,b6",
    "17-18": "b7,b3,b6",
    "18-19": "b7,b3,b6",
    "19-20": "b4,b7,b3,b6"
  },
  "Mie": {
    "7-8": "b6",
    "8-9": "b4,b6",
    "9-10": "b4,b7,b3,b6",
    "10-11": "b4,b6",
    "11-12": "b4,b7,b3,b6",
    "12-13": "b4,b7,b3,b6",
    "13-14": "b4,b7,b6",
    "14-15": "b4,b7,b6",
    "15-16": "b4,b7,b6",
    "16-17": "b4,b6",
    "17-18": "b7,b6",
    "18-19": "b4,b7",
    "19-20": "b4,b7,b3"
  },
  "Jue": {
    "7-8": "b7,b3,b6",
    "8-9": "b7,b6",
    "9-10": "b7,b6",
    "10-11": "b7,b6",
    "11-12": "b4,b3",
    "12-13": "b4,b6",
    "13-14": "b4,b6",
    "14-15": "b4",
    "15-16": "b3",
    "16-17": "b4,b7,b3,b6",
    "17-18": "b7,b3,b6",
    "18-19": "b7,b3,b6",
    "19-20": "b4,b7,b3,b6"
  },
  "Vie": {
    "7-8": "b6",
    "8-9": "b7,b6",
    "9-10": "b4",
    "10-11": "b4",
    "11-12": "b4,b7,b3,b6",
    "12-13": "b4,b7,b3,b6",
    "13-14": "b4,b7,b3,b6",
    "14-15": "b3,b6",
    "15-16": "b3",
    "16-17": "b7,b6",
    "17-18": "b7,b3,b6",
    "18-19": "b4,b7,b3",
    "19-20": "b4,b7,b3"
  }
};

export default function SalonesDisponibles() {
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
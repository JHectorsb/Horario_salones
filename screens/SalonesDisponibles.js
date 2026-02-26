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
    "7-8": "",
    "8-9": "",
    "9-10": "b4,b7",
    "10-11": "b4,b7",
    "11-12": "b4,b7",
    "12-13": "b4,b7",
    "13-14": "b4",
    "14-15": "b4,b7",
    "15-16": "b4,b7",
    "16-17": "b4,b7",
    "17-18": "b4,b7",
    "18-19": "b4,b7",
    "19-20": "b4,b7"
  },
  "Mar": {
    "7-8": "b7",
    "8-9": "b7",
    "9-10": "",
    "10-11": "",
    "11-12": "b4",
    "12-13": "b4",
    "13-14": "b4,b7",
    "14-15": "b4",
    "15-16": "",
    "16-17": "b4,b7",
    "17-18": "b7",
    "18-19": "b7",
    "19-20": "b4,b7"
  },
  "Mie": {
    "7-8": "",
    "8-9": "b4",
    "9-10": "b4,b7",
    "10-11": "b4",
    "11-12": "b4,b7",
    "12-13": "b4,b7",
    "13-14": "b4,b7",
    "14-15": "b4,b7",
    "15-16": "b4,b7",
    "16-17": "b4",
    "17-18": "b7",
    "18-19": "b4,b7",
    "19-20": "b4,b7"
  },
  "Jue": {
    "7-8": "b7",
    "8-9": "b7",
    "9-10": "b7",
    "10-11": "b7",
    "11-12": "b4",
    "12-13": "b4",
    "13-14": "b4",
    "14-15": "b4",
    "15-16": "",
    "16-17": "b4,b7",
    "17-18": "b7",
    "18-19": "b7",
    "19-20": "b4,b7"
  },
  "Vie": {
    "7-8": "",
    "8-9": "b7",
    "9-10": "b4",
    "10-11": "b4",
    "11-12": "b4,b7",
    "12-13": "b4,b7",
    "13-14": "b4,b7",
    "14-15": "",
    "15-16": "",
    "16-17": "b7",
    "17-18": "b7",
    "18-19": "b4,b7",
    "19-20": "b4,b7"
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
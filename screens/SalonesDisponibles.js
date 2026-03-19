import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { horas, dias, horario_salones_b, horario_salones_fie } from "../horas/horarios.js";
import { styles } from "../estilos/estilos.js";

export default function HorarioSalones() {

  const [edificio, setEdificio] = useState("B");

  const horarioActual =
    edificio === "B" ? horario_salones_b : horario_salones_fie;

  return (
    <View style={styles.container}>

      {/* SELECTOR */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
        
        <TouchableOpacity
          onPress={() => setEdificio("B")}
          style={{
            backgroundColor: edificio === "B" ? "#312E81" : "#1E1E1E",
            padding: 10,
            marginHorizontal: 5,
            borderRadius: 6
          }}
        >
          <Text style={{ color: "#fff" }}>B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setEdificio("FIE")}
          style={{
            backgroundColor: edificio === "FIE" ? "#312E81" : "#1E1E1E",
            padding: 10,
            marginHorizontal: 5,
            borderRadius: 6
          }}
        >
          <Text style={{ color: "#fff" }}>FIE</Text>
        </TouchableOpacity>

      </View>

      {/* GRID */}
      <View style={styles.gridContainer}>

        {/* Header */}
        <View style={styles.row}>
          <View style={styles.timeColumnHeader} />
          {dias.map((dia) => (
            <View key={dia} style={styles.headerCell}>
              <Text style={styles.headerText}>
                {dia.substring(0, 3)}
              </Text>
            </View>
          ))}
        </View>

        {/* Filas */}
        {horas.map((hora) => (
          <View key={hora} style={styles.row}>

            {/* Hora */}
            <View style={styles.hourCell}>
              <Text style={styles.hourText}>{hora}</Text>
            </View>

            {/* Celdas */}
            {dias.map((dia) => {
              const salon = horarioActual[dia]?.[hora];

              return (
                <View key={dia + hora} style={styles.cell}>
                  {salon ? (
                    <View style={styles.activeCard}>
                      <Text style={styles.activeCardText} numberOfLines={4}>
                        {salon}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.emptyCard} />
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
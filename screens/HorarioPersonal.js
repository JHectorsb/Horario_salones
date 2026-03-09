import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { horas, dias, horario } from "../horas/horarios.js";
import { styles } from "../estilos/estilos.js";

export default function HorarioPersonal() {
  return (
    <View style={styles.container}>
        <View style={styles.gridContainer}>
          {/* Header (Días) */}
          <View style={styles.row}>
            <View style={styles.timeColumnHeader} />
            {dias.map((dia) => (
              <View key={dia} style={styles.headerCell}>
                <Text style={styles.headerText} numberOfLines={1}>
                  {dia.substring(0, 3)}
                </Text>
              </View>
            ))}
          </View>

          {/* Filas (Horas y Materias) */}
          {horas.map((hora) => (
            <View key={hora} style={styles.row}>
              {/* Columna de la hora */}
              <View style={styles.hourCell}>
                <Text style={styles.hourText}>{hora}</Text>
              </View>

              {/* Celdas del horario */}
              {dias.map((dia) => {
                const materia = horario[dia]?.[hora];
                return (
                  <View key={dia + hora} style={styles.cell}>
                    {materia ? (
                      <View style={styles.activeCard}>
                        {/* Se ajusta a un máximo de 4 líneas con texto pequeño */}
                        <Text style={styles.activeCardText} numberOfLines={4}>
                          {materia}
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

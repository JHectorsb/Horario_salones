import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { horas, dias } from "../horas/horarios.js";
import { styles } from "../estilos/estilos.js";

export default function HorarioPersonal() {

  // Estado del horario (vacío al inicio)
  const [miHorario, setMiHorario] = useState({});

  // Función para actualizar una materia
  const actualizarMateria = (dia, hora, materia) => {
    setMiHorario((prev) => ({
      ...prev,
      [dia]: {
        ...prev[dia],
        [hora]: materia,
      },
    }));
  };

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

            {/* Celdas editables */}
            {dias.map((dia) => {
              const materia = miHorario[dia]?.[hora];

              return (
                <View key={dia + hora} style={styles.cell}>
                  <TextInput
                    style={styles.input}
                    placeholder="Materia"
                    value={materia || ""}
                    onChangeText={(text) =>
                      actualizarMateria(dia, hora, text)
                    }
                  />
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
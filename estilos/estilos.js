import { StyleSheet, Dimensions } from "react-native";
import { dias} from "../horas/horarios.js";

const screenWidth = Dimensions.get("window").width;

export const timeColumnWidth = 45; 
export const cellWidth = (screenWidth - timeColumnWidth) / dias.length;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  gridContainer: {
    paddingBottom: 40,
  },
  row: {
    flexDirection: "row",
  },
  timeColumnHeader: {
    width: timeColumnWidth
  },
  headerCell: {
    width: cellWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#E0E0E0",
    fontWeight: "bold",
    fontSize: 12, 
    textTransform: "capitalize",
  },
  hourCell: {
    width: timeColumnWidth,
    alignItems: "center",
    paddingTop: 8,
  },
  hourText: {
    color: "#888888",
    fontSize: 10,
    fontWeight: "500",
  },
  cell: {
    width: cellWidth,
    minHeight: 55,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#2A2A2A",
    padding: 2,
  },
  activeCard: {
    flex: 1,
    backgroundColor: "#312E81",
    borderRadius: 4, 
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCardText: {
    color: "#E0E7FF",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 11,
  },
  emptyCard: {
    flex: 1,
  },
});
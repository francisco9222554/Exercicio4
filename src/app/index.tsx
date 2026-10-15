import { View, StyleSheet } from "react-native";
import TelaAluno from "../components/TelaAluno";

export default function Index() {
  return (
    <View style={styles.container}>
      <TelaAluno />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
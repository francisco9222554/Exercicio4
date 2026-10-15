import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TelaAluno() {
  const nome = "Maria Silva";
  const idade = 16;
  const turma = "3 A";
  const nota1 = 8.5;
  const nota2 = 6.0;

  const [mostrarResultado, setMostrarResultado] = useState(false);

  const media = (nota1 + nota2) / 2;
  const aprovado = media >= 7;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados do Aluno</Text>
      <Text style={styles.campo}>Nome: {nome}</Text>
      <Text style={styles.campo}>Idade: {idade}</Text>
      <Text style={styles.campo}>Turma: {turma}</Text>
      <Text style={styles.campo}>Nota 1: {nota1}</Text>
      <Text style={styles.campo}>Nota 2: {nota2}</Text>

      <Button
        title="Calcular Média"
        onPress={() => setMostrarResultado(true)}
      />

      {mostrarResultado && (
        <View style={styles.areaResultado}>
          <Text style={styles.mediaTexto}>Média: {media.toFixed(1)}</Text>
          
          {aprovado ? (
            <Text style={[styles.status, styles.aprovado]}>Status: Aprovado</Text>
          ) : (
            <Text style={[styles.status, styles.reprovado]}>Status: Reprovado</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justify: "center",
    padding: 20,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  campo: {
    fontSize: 16,
  },
  areaResultado: {
    marginTop: 20,
    gap: 6,
  },
  mediaTexto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    fontSize: 18,
    fontWeight: "bold",
  },
  aprovado: {
    color: "green",
  },
  reprovado: {
    color: "red",
  },
});
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function SquareAreaScreen({ navigation }) {
 const [side, setSide] = useState('');
 const [result, setResult] = useState(null);

 const handleCalculate = () => {
    const area = parseFloat(side) * parseFloat(side);
    setResult(area);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área do Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
      <Button title="Ir para Triângulo" onPress={() => navigation.navigate('App2')} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
 },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
 },
 result: {
    marginTop: 20,
    fontSize: 18,
 },
});
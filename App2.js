import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function TriangleAreaScreen({ navigation }) {
 const [base, setBase] = useState('');
 const [height, setHeight] = useState('');
 const [result, setResult] = useState(null);

 const handleCalculate = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setResult(area);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área do Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
      <Button title="Voltar para Quadrado" onPress={() => navigation.navigate('App1')} />
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
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App1 from './App1';
import App2 from './App2';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
 const [age, setAge] = useState('');
 const [greeting, setGreeting] = useState('');

 const handleAge = () => {
    const ageNumber = parseInt(age, 10);
    if (ageNumber >= 0 && ageNumber <= 12) {
      setGreeting(`Você é uma criança.`);
    } else if (ageNumber >= 13 && ageNumber <= 17) {
      setGreeting(`Você é um adolescente.`);
    } else if (ageNumber >= 18 && ageNumber <= 20) {
      setGreeting(`Você é um jovem.`);
    } else if (ageNumber >= 21 && ageNumber <= 60) {
      setGreeting(`Você é um adulto.`);
    } else if (ageNumber > 60) {
      setGreeting(`Você é um idoso.`);
    } else {
      setGreeting(`Por favor, insira uma idade válida.`);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja sua classificação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setAge(text)}
        value={age.toString()}
        keyboardType="numeric"
      />
      <Button title="Classificar" onPress={handleAge} />
      <Text style={styles.greeting}>{greeting}</Text>
      <Button title="Calcular área" onPress={() => navigation.navigate('App1')} />
    </View>
 );
}

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
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
 greeting: {
    marginTop: 20,
    fontSize: 18,
 },
});
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Registro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const salvarRegistro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    navigation.goBack(); // volta para tela de login após salvar
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={30} color="#B2BEB5" />
      </TouchableOpacity>

      <Text style={styles.titulo}>REGISTRAR</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="black" style={styles.icone} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#000"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="black" style={styles.icone} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Entypo
          name={mostrarSenha ? 'eye' : 'eye-with-line'}
          size={20}
          color="black"
          style={styles.icone}
          onPress={() => setMostrarSenha(!mostrarSenha)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#000"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={salvarRegistro}>
        <Text style={styles.botaoTexto}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E1D',
    padding: 30,
    justifyContent: 'center',
  },
  voltar: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Baskerville Old Face',
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icone: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  botao: {
    backgroundColor: '#4C6B58',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Baskerville Old Face',
  },
});

export default Registro;

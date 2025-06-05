import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function LOGIN({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const entrar = () => {
    // Aqui você pode adicionar validação se quiser
    navigation.navigate('DASHBOARD');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boasVindas}>BEM VINDO</Text>
      <Text style={styles.nomeApp}>XUXU</Text>

      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#062925" style={styles.icon} />
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#062925"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo
            name={mostrarSenha ? 'eye' : 'eye-with-line'}
            size={20}
            color="#062925"
            style={styles.icon}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#062925"
            secureTextEntry={!mostrarSenha}
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.botaoEntrar} onPress={entrar}>
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registrarTexto}>Não tem conta? Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boasVindas: {
    fontSize: 50,
    color: '#ffffff',
    fontFamily: 'Alice',
    letterSpacing: 1,
  },
  nomeApp: {
    fontSize: 40,
    color: '#ffffff',
    fontFamily: 'Alice',
    marginBottom: 30,
  },
  loginBox: {
    backgroundColor: '#2A4847',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#062925',
    fontFamily: 'Alice',
    fontSize: 16,
  },
  botaoEntrar: {
    backgroundColor: '#003B3A',
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Alice',
    fontWeight: 'bold',
  },
  registrarTexto: {
    color: '#B0D9D6',
    fontSize: 14,
    marginTop: 5,
  },
});

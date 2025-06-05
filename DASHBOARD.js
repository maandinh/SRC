import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView,} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const categorias = [
  {
    nome: 'CAFÉ DA MANHÃ',
    imagem: { uri: 'https://i.pinimg.com/736x/65/33/0f/65330fd3078e36b401d18223daa29dda.jpg' },
  },
  {
    nome: 'PRATO PRINCIPAL',
    imagem: { uri: 'https://i.pinimg.com/736x/f9/c9/69/f9c969b83d5ca5ea6ad4c87828f27729.jpg' },
  },
  {
    nome: 'SALADA',
    imagem: { uri: 'https://i.pinimg.com/736x/08/06/bf/0806bf4c11f64e48e5e89869375c1909.jpg' },
  },
  {
    nome: 'LANCHE',
    imagem: { uri: 'https://i.pinimg.com/736x/b2/37/e5/b237e5d68282a2f4e1bae7b7f16233ba.jpg' },
  },
];


export default function DASHBOARD({ navigation }) {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.menuButton}>
        <Entypo name="menu" size={30} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Selecionar Categoria</Text>

      <ScrollView style={styles.scroll}>
        {categorias.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <ImageBackground
              source={item.imagem}
              style={styles.cardImage}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTexto}>{item.nome}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3B36',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  titulo: {
    fontSize: 26,
    color: '#ffffff',
    fontFamily: 'Baskerville Old Face',
    textAlign: 'center',
    marginBottom: 20,
  },
  scroll: {
    marginTop: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cardTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Baskerville Old Face',
  },
});

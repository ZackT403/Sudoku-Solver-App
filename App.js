import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/layout/Header'
import Sudoku from "./components/Sudoku"
import HowTo from "./components/layout/HowTo"
export default function App() {
  return (
    <View>
      <Header/>
      <HowTo/>
      <Sudoku />
    </View>
  );
}



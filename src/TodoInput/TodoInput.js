import React, {useState} from 'react';

import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoInput.styles';

const TodoInput = ({handleInput}) => {
  const [textChanged, setTextChanged] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleButton = () => {
    if (textInput === '') {
      Alert.alert('Yaz bir şeyler');
    } else {
      handleInput(textInput);
      setTextChanged(false);
      setTextInput('');
    }
  };
  const handleText = text => {
    setTextInput(text);
    setTextChanged(true);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize={'words'}
        placeholder={'Yapılacak...'}
        placeholderTextColor={'white'}
        underlineColorAndroid={'white'}
        onChangeText={text => {
          handleText(text);
        }}
        value={textInput}
      />
      <TouchableOpacity
        style={textChanged ? styles.todoButtonActive : styles.todoButtonPassive}
        onPress={() => {
          handleButton();
        }}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Counter from './Counter';
import Card from './Card';
import TodoInput from './TodoInput';
import randomIdGenerator from './helpers/randomIdGenerator';

const App: () => Node = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //change count when to-do added
  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  const handleInput = text => {
    const todo = {
      id: randomIdGenerator(todos.length + 1),
      todo: text,
      isCompleted: false,
    };
    setTodos(todos => [...todos, todo]);
  };
  const deleteTodo = text => {
    const todosCopy = [...todos];
    const index = todosCopy.map(x => x.todo.indexOf(text));
    if (index !== -1) {
      todosCopy.splice(index, 1);
    }
    setTodos(todosCopy);
  };
  const renderTodos = ({item}) => (
    <Card todos={item} filtered={text => deleteTodo(text)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Counter count={count} />
      <View style={styles.cardContainer}>
        <FlatList
          data={todos}
          renderItem={renderTodos}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <TodoInput handleInput={text => handleInput(text)} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  cardContainer: {
    flex: 1,
  },
});

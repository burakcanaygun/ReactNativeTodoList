import React, {useEffect, useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Card.styles';

const Card = ({todos, filtered}) => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (click) {
      todos.isCompleted = true;
    }
  }, [click]);
  return (
    <TouchableOpacity
      onPress={() => {
        setClick(true);
      }}>
      <View
        style={[
          styles.cardContainer,
          [click ? styles.cardCompleted : styles.cardProgress],
        ]}>
        <Text style={click ? styles.lineThrough : ''}>{todos.todo}</Text>
        {click && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPressIn={() => {
              filtered(todos.todo);
            }}
            delayLongPress={20000}>
            <Text style={styles.deleteButtonText}>x</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;

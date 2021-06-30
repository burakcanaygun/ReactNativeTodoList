import React from 'react';

import {Text, View} from 'react-native';
import styles from './Counter.styles';
const Counter = ({count}) => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Yapılacaklar</Text>
      <Text style={styles.counterText}>{count}</Text>
    </View>
  );
};

Counter.defaultProps = {
  count: 0, //initial value
};

export default Counter;

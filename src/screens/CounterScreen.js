import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => count == 0 ? setCount(0) : setCount(count - 1)} />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;

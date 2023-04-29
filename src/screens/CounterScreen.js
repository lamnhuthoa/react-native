import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const COUNTER_AMOUNT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return state.count === 0
        ? state
        : { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: COUNTER_AMOUNT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: COUNTER_AMOUNT })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

export default CounterScreen;

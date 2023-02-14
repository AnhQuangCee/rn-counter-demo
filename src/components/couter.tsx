import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const addOne = (input: number) => input + 1;

export const Counter: React.FC<{ lable: string }> = ({ lable }) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>
        {lable} pressed {count} times
      </Text>
      <Button title="Press me" onPress={() => setCount(addOne(count))} />
    </View>
  );
};

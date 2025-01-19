import React, { useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';

type goalInputProps = {
  addGoal: (goal: string) => void;
};

export default function GoalInput({ addGoal }: goalInputProps) {
  const [currentGoal, setCurrentGoal] = useState<string>();

  const textHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setCurrentGoal(e.nativeEvent.text);
  };

  const buttonHandler = (): void => {
    if (!currentGoal) return;
    addGoal(currentGoal);
    console.log(currentGoal);
    setCurrentGoal(undefined);
  };

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        value={currentGoal}
        placeholder="Your course goal!"
        onChange={textHandler}
        style={styles.textInput}
      />
      <Button onPress={buttonHandler} title="Add goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginBottom: 15,
  } as ViewStyle,
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'grey',
  } as TextStyle,
});

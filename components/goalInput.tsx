import { goalType } from '@/types';
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
  setGoals: React.Dispatch<React.SetStateAction<goalType[]>>;
};

export default function GoalInput({ setGoals }: goalInputProps) {
  const [currentGoal, setCurrentGoal] = useState<string>();

  const textHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setCurrentGoal(e.nativeEvent.text);
  };

  const buttonHandler = (): void => {
    if (!currentGoal) return;
    setGoals((goals: goalType[]) => [
      ...goals,
      { id: Math.random().toString(), goal: currentGoal },
    ]);
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

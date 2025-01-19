import React from 'react';
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
  currentGoal: string | undefined;
  textHandler: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  buttonHandler: () => void;
};

export default function GoalInput({
  currentGoal,
  textHandler,
  buttonHandler,
}: goalInputProps) {
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

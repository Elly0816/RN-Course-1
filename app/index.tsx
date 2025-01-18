import { StatusBar } from 'expo-status-bar';
import { ReactElement, useCallback, useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
// import {
//   TextInput,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';

export default function App(): ReactElement {
  const [currentGoal, setCurrentGoal] = useState<string>();
  const [goals, setGoals] = useState<string[]>([]);

  const textHandler = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
      // e.preventDefault();
      setCurrentGoal(e.nativeEvent.text);
    },
    []
  );

  const buttonHandler = useCallback(
    (e: GestureResponderEvent): void => {
      if (!currentGoal) return;
      if (goals.length > 0) {
        setGoals([...goals, currentGoal]);
      } else {
        setGoals([currentGoal]);
      }
      console.log(currentGoal);
      setCurrentGoal(undefined);
    },
    [currentGoal]
  );
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        {/* <GestureHandlerRootView > */}
        <TextInput
          value={currentGoal}
          placeholder="Your course goal!"
          onChange={textHandler}
          style={styles.textInput}
        />
        {/* </GestureHandlerRootView> */}
        <Button onPress={buttonHandler} title="Add goal" />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((g, i) => (
          <Text style={styles.text} key={i}>
            {g}
          </Text>
        ))}
        {/* <Text>{goals.map(g => g)}</Text> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
  } as ViewStyle,
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
  text: {
    fontWeight: 'condensedBold',
    fontSize: 15,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 2,
    borderRadius: 5,
  } as TextStyle,
  goalsContainer: {
    flex: 5,
  } as ViewStyle,
});

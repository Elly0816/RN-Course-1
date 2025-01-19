import { StatusBar } from 'expo-status-bar';
import { ReactElement, useState } from 'react';
import {
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ViewStyle,
} from 'react-native';
import GoalInput from '@/components/goalInput';
import { goalType } from '@/types';
import GoalsList from '@/components/goalsList';

export default function App(): ReactElement {
  const [currentGoal, setCurrentGoal] = useState<string>();
  const [goals, setGoals] = useState<goalType[]>([]);

  const textHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setCurrentGoal(e.nativeEvent.text);
  };

  const buttonHandler = (): void => {
    if (!currentGoal) return;
    setGoals(goals => [
      ...goals,
      { id: Math.random().toString(), goal: currentGoal },
    ]);
    console.log(currentGoal);
    setCurrentGoal(undefined);
  };

  const handleDelete = (id: number): void => {
    setGoals(goals => [...goals.filter((g, i) => i !== id)]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        buttonHandler={buttonHandler}
        currentGoal={currentGoal}
        textHandler={textHandler}
      />
      <GoalsList goals={goals} handleDelete={handleDelete} />
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
});

import { StatusBar } from 'expo-status-bar';
import { ReactElement, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import GoalInput from '@/components/goalInput';
import { goalType } from '@/types';
import GoalsList from '@/components/goalsList';

export default function App(): ReactElement {
  const [goals, setGoals] = useState<goalType[]>([]);

  function addGoalhandler(goal: string) {
    setGoals(goals => [...goals, { id: Math.random().toString(), goal: goal }]);
  }

  function deleteGoalHandler(id: number) {
    setGoals(goals => goals.filter((goal, index) => id !== index));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalhandler} />
      <GoalsList goals={goals} deleteGoal={deleteGoalHandler} />
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

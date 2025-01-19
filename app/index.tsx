import { StatusBar } from 'expo-status-bar';
import { ReactElement, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import GoalInput from '@/components/goalInput';
import { goalType } from '@/types';
import GoalsList from '@/components/goalsList';

export default function App(): ReactElement {
  const [goals, setGoals] = useState<goalType[]>([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <GoalsList goals={goals} setGoals={setGoals} />
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

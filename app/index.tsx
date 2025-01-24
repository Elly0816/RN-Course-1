import { StatusBar } from 'expo-status-bar';
import { ReactElement, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import GoalInput from '@/components/goalInput';
import { goalType } from '@/types';
import GoalsList from '@/components/goalsList';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import React from 'react';

export default function App(): ReactElement {
  const [goals, setGoals] = useState<goalType[]>([]);

  function addGoalhandler(goal: string) {
    setGoals(goals => [...goals, { id: Math.random().toString(), goal: goal }]);
  }

  function deleteGoalHandler(id: number) {
    setGoals(goals => goals.filter((goal, index) => id !== index));
  }

  /*
  The Stack.Screen option below stops the function name being used as the
   name of the screen from showing up between the status 
   bar and the contents of the screen*/
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.appContainer}>
            <GoalInput addGoal={addGoalhandler} />
            <GoalsList goals={goals} deleteGoal={deleteGoalHandler} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  } as ViewStyle,
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
    backgroundColor: '#1e085a',
  } as ViewStyle,
});

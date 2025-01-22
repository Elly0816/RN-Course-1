import { goalType } from '@/types';
import { ReactElement } from 'react';
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  ViewStyle,
  Pressable,
} from 'react-native';
import GoalItem from './goalItem';

type GoalsListProps = {
  goals: goalType[];
  deleteGoal: (id: number) => void;
};
export default function GoalsList({
  goals,
  deleteGoal,
}: GoalsListProps): ReactElement {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={({ item, index }) => (
          <View style={styles.textAndButtonContainer}>
            <GoalItem index={index} item={item} onPress={deleteGoal} />
          </View>
        )}
        keyExtractor={(data, index) => (data.id ? data.id : index.toString())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textAndButtonContainer: {
    borderColor: 'gray',
    marginBottom: 5,
    // paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  goalsContainer: {
    flex: 5,
  } as ViewStyle,
});

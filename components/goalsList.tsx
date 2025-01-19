import { goalType } from '@/types';
import { ReactElement } from 'react';
import { View, FlatList, Button, StyleSheet, ViewStyle } from 'react-native';
import GoalItem from './goalItem';

type GoalsListProps = {
  goals: goalType[];
  handleDelete: (id: number) => void;
};
export default function GoalsList({
  goals,
  handleDelete,
}: GoalsListProps): ReactElement {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={({ item, index }) => (
          <View style={styles.textAndButtonContainer}>
            <GoalItem index={index} item={item} />
            <Button title="Delete goal" onPress={() => handleDelete(index)} />
          </View>
        )}
        keyExtractor={(data, index) => (data.id ? data.id : index.toString())}
      />
      {/* <ScrollView>
              {goals.map((g, i) => (
                <View style={styles.textContainer} key={i}>
                  <Text style={styles.goalText}>
                    {i + 1}. {g}
                  </Text>
                </View>
              ))}
            </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textAndButtonContainer: {
    borderColor: 'gray',
    marginBottom: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  goalsContainer: {
    flex: 5,
  } as ViewStyle,
});

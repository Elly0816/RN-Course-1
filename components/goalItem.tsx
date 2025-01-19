import { goalItemType } from '@/types';
import { ReactElement } from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export default function GoalItem({ item, index }: goalItemType): ReactElement {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.goalText}>
        {index + 1}. {item.goal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 2,
    backgroundColor: '#ffaaff',
    borderRadius: 5,
    width: '65%',
    marginRight: 3,
    paddingTop: 4,
    paddingLeft: 5,
  } as ViewStyle,
  goalText: {
    fontWeight: 'condensedBold',
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white',
    flex: 1,
    marginRight: 5,
  } as TextStyle,
});

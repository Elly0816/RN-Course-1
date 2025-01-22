import { goalItemType } from '@/types';
import React from 'react';
import { ReactElement } from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Pressable,
} from 'react-native';

export default function GoalItem({
  item,
  index,
  onPress,
}: goalItemType): ReactElement {
  return (
    <Pressable
      style={({ pressed }) => {
        return !pressed
          ? styles.textContainer
          : { ...styles.textContainer, opacity: 0.5 };
      }}
      onPress={onPress.bind(null, index)}
      //   android_ripple={{ color: '#888888' }}
    >
      <Text style={styles.goalText}>
        {index + 1}. {item.goal}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 2,
    backgroundColor: '#ffaaff',
    borderRadius: 5,
    width: '100%',
    paddingTop: 4,
    padding: 5,
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

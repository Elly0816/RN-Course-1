import { GestureResponderEvent } from 'react-native';

export type goalType = {
  id: string;
  goal: string;
};

export type goalItemType = {
  item: goalType;
  index: number;
  onPress: (index: number) => void;
};

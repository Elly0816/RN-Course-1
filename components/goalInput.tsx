import { useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  Alert,
  Modal,
  Image,
  ImageStyle,
} from 'react-native';

type goalInputProps = {
  addGoal: (goal: string) => void;
};

export default function GoalInput({ addGoal }: goalInputProps) {
  const [currentGoal, setCurrentGoal] = useState<string>();
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const textHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setCurrentGoal(e.nativeEvent.text);
  };

  const buttonHandler = (): void => {
    if (!currentGoal || currentGoal.trim().length < 1) return;
    addGoal(currentGoal);
    console.log(currentGoal);
    setCurrentGoal(undefined);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        hardwareAccelerated
        visible={modalIsVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
          setModalIsVisible(false);
        }}
      >
        <View style={styles.textInputContainer}>
          <Image
            source={require('@/assets/images/goal.png')}
            style={styles.image}
          />
          <TextInput
            value={currentGoal}
            placeholder="Your course goal!"
            onChange={textHandler}
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={buttonHandler} title="Add goal" />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => {
                  setModalIsVisible(false);
                }}
                color="#ff3333"
                title="Cancel"
              />
            </View>
          </View>
        </View>
        <View></View>
      </Modal>

      {!modalIsVisible && (
        <View style={styles.editButton}>
          <Button
            onPress={() => setModalIsVisible(true)}
            color="#3377ff"
            title="Add new goal"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#aaaaaa',
  } as ViewStyle,
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    color: '#ffffff',
    fontWeight: 'bold',
  } as TextStyle,
  buttonContainer: {
    // flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  } as ViewStyle,
  button: {
    marginHorizontal: 10,
    width: 90,
  } as ViewStyle,
  editButton: {
    marginBottom: 10,
  } as ViewStyle,
  image: {
    height: 100,
    width: 100,
  } as ImageStyle,
});

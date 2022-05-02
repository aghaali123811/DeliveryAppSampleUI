import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/Colors';

export default function SimpleButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 20,
    height: 40,
    backgroundColor: Colors.red,
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 8,
  },
});

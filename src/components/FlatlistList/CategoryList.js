import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/Colors';

export default function CategoryList(props) {
  const {item, selectedCategory} = props;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 32,
        minWidth: 72,
        backgroundColor:
          selectedCategory === item.name ? Colors.red : Colors.white,
        marginLeft: 10,
        borderRadius: 5,
        borderColor: Colors.black,
        borderWidth: selectedCategory === item.name ? null : 0.2,
      }}
      onPress={props.onPress}>
      <Image source={item.icon} style={styles.icon} />
      <Text
        style={{
          marginRight: 2,
          marginLeft: 2,
          alignSelf: 'center',
          fontSize: 9,
          fontWeight: '500',
          color: selectedCategory === item.name ? Colors.white : Colors.black,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginLeft: 5,
    width: 17,
    height: 17,
  },
});

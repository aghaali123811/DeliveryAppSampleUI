import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../common/Colors';

export default function FoodItemList(props) {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.uprContainer}>
        <View style={styles.leftItemContainer}>
          <Text style={styles.leftItemTxt}>{item.itemLeft}</Text>
        </View>
        <View style={styles.rightItemContainer}>
          <Text style={styles.rightItemTxt}>{item.discount}</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <Image source={require('../../assets/food.png')} style={styles.img} />
        <View style={styles.addContainer}>
          <Entypo
            name="plus"
            size={22}
            color={Colors.white}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>

      <Text style={styles.foodName}>{item.foodName}</Text>
      <View style={styles.flex}>
        <View style={styles.row}>
          <Text style={styles.was}>{item?.was}</Text>
          <Text style={styles.now}>{item.now}</Text>
        </View>
        <View style={styles.row}>
          <Entypo
            name="star"
            color={Colors.black}
            style={{alignSelf: 'center', marginLeft: 3}}
          />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 220,
    backgroundColor: Colors.white,
    marginRight: 15,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 10,
  },
  uprContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftItemContainer: {
    minWidth: 20,
    paddingHorizontal: 3,
    backgroundColor: Colors.green,
    height: 18,
    borderRadius: 6,
    marginTop: 2,
    marginLeft: 2,
  },
  leftItemTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 1.5,
  },
  rightItemContainer: {
    minWidth: 20,
    paddingHorizontal: 3,
    backgroundColor: Colors.orange,
    height: 22,
    borderTopRightRadius:7,
    borderBottomLeftRadius:7,
    marginLeft: 4,
  },
  rightItemTxt: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 3,
  },
  imgContainer: {
    width: '70%',
    height: 115,
    alignSelf: 'center',
    backgroundColor: Colors.royalYellow,
    borderRadius: 8,
    marginTop: 20,
    elevation: 5,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 8,
  },
  addContainer: {
    width: 28,
    height: 23,
    borderRadius: 6,
    backgroundColor: Colors.red,
    position: 'absolute',
    bottom: -3,
    right: -5,
  },
  foodName: {
    fontWeight: '700',
    fontSize: 13,
    color: Colors.black,
    marginLeft: 20,
    marginTop: 15,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  was: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 20,
    textDecorationLine: 'line-through',
  },
  now: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
  },
  rating: {
    fontWeight: '700',
    fontSize: 12,
    alignSelf: 'center',
    marginRight: 8,
  },
});

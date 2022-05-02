// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../common/Colors';
import CategoryList from '../../components/FlatlistList/CategoryList';
import AddressHeader from '../../components/Headers/AddressHeader';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FoodItemList from '../../components/FlatlistList/FoodItemList';
import ResturantList from '../../components/FlatlistList/ResturantList';
import styles from './styles';

function Home() {
  const [categoryData, setCategoryData] = React.useState([
    {name: 'Breakfast', icon: require('../../assets/breakfast.png')},
    {name: 'Lunch', icon: require('../../assets/lunch.png')},
    {name: 'Snackes', icon: require('../../assets/snacks.png')},
    {name: 'Dinner', icon: require('../../assets/Dinner.png')},
    {name: 'Desert', icon: require('../../assets/Desert.png')},
  ]);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [items, setItems] = React.useState([
    {
      foodName: 'Paneer tikka',
      was: '₹190',
      now: ' ₹133',
      discount: '30%Off',
      rating: '4.3',
      itemLeft: '5 left',
    },
    {
      foodName: 'Chicken fried rice',
      was: '₹140',
      now: ' ₹84 ',
      discount: '40%Off',
      rating: '4.3',
      itemLeft: '5 left',
    },
    {
      foodName: 'Malai chaap roll',
      was: '₹190',
      now: ' ₹133',
      discount: '30%Off',
      rating: '4.3',
      itemLeft: '5 left',
    },
  ]);
  const [resturants, setResturants] = React.useState([
    {
      resturantName: 'Paneer tikka',
      off: '30-40 % Off',
      location: 'North Indian, Mughlai, rolls',
      rating: '4.3',
      area: 'Patel nagar',
      mins: '20-25 mins',
    },
    {
      resturantName: 'Paneer tikka',
      off: '30-40 % Off',
      location: 'North Indian, Mughlai, rolls',
      rating: '4.3',
      area: 'Patel nagar',
      mins: '20-25 mins',
    },
  ]);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          {/* Header Address */}
          <AddressHeader address={'Vikhroli West, Mumbai, Maharashtra'} />

          <FlatList
            data={categoryData}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            renderItem={({item, index}) => (
              <CategoryList
                item={item}
                selectedCategory={selectedCategory}
                onPress={() => setSelectedCategory(item.name)}
              />
            )}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.label}>Popular food near you</Text>
            <Text style={styles.txt}>See All</Text>
          </View>

          <TouchableOpacity style={styles.popularFoodContainer}>
            <View style={styles.popularRow}>
              <Image
                source={require('../../assets/popular.png')}
                style={styles.img}
              />
              <View style={styles.marginLeft}>
                <View style={styles.row}>
                  <Text style={styles.name}>Funky Tacos</Text>
                  <Entypo
                    name="star"
                    color={Colors.black}
                    style={styles.starIcon}
                  />
                  <Text style={styles.rating}>4.3</Text>
                </View>
                <Text style={styles.place}>Rajendra Place</Text>
              </View>
            </View>

            <View style={styles.rightContainer}>
              <SimpleLineIcons
                name="heart"
                color={Colors.black}
                style={styles.arrowIcon}
              />
              <SimpleLineIcons
                name="arrow-right"
                color={Colors.black}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>

          <FlatList
            data={items}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            renderItem={({item, index}) => <FoodItemList item={item} />}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.label}>Restaurants near you</Text>
            <Text style={styles.txt}>See All</Text>
          </View>

          <FlatList
            data={resturants}
            renderItem={({item, index}) => <ResturantList item={item} />}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default Home;

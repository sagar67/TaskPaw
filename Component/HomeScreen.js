import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  useWindowDimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from './globalStyles';
import IconSelector, { ICON_TYPE } from './common/IconSelect';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const services = [
  {
    id: 1,
    title: 'Pet Grooming',
    image: require('../assets/images/services/grooming.png'),
  },
  {
    id: 2,
    title: 'Pet Walking',
    image: require('../assets/images/services/walking.png'),
  },
  {
    id: 3,
    title: 'Pet Dating',
    image: require('../assets/images/services/dating.png'),
  },
  {
    id: 4,
    title: 'Pet Training',
    image: require('../assets/images/services/training.png'),
  },
  {
    id: 5,
    title: 'Pet Adoption',
    image: require('../assets/images/services/adoption.png'),
  },
];

const banners = [
  {
    id: '1',
    image: require('../assets/images/banner.png'),
    title: 'All New\nGrommer\nin Town!',
    discount: '-20%',
  },
  {
    id: '2',
    image: require('../assets/images/banner.png'),
    title: 'All New\nGrommer\nin Town!',
    discount: '-25%',
  },
  {
    id: '3',
    image: require('../assets/images/banner.png'),
    title: 'All New\nGrommer\nin Town!',
    discount: '-15%',
  },
];

const reviewData = [{
  id: '1',
  name: 'Pooja Jain',
  description:
    'Lorem ipsum dolor sit amet consectetur\nadipisicing elit. Neque, odio!',
  image: require('../assets/images/rating.png'),
  rating: '4',
}, {
  id: '2',
  name: 'Pooja Jain',
  description:
    'Lorem ipsum dolor sit amet consectetur\nadipisicing elit. Neque, odio!',
  image: require('../assets/images/rating2.png'),
  rating: '5'
}]

const MainContent = () => {
  const { width } = useWindowDimensions();

  const ITEM_WIDTH = width * 0.9;
  const SPACING = 10;
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratingData, setRatingData] = useState(reviewData)
  const navigation = useNavigation();
  const singleObject = {
    id: '1',
    name: 'Rohit Singhania',
    description:
      'Lorem ipsum dolor sit amet consectetur\nadipisicing elit. Neque, odio!',
  };

  const data = Array.from({ length: 3 }, () => singleObject);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[globalStyles.carouselItem, { width: ITEM_WIDTH, marginRight: SPACING }]}>
      <Image source={item.image} style={globalStyles.absoluteImage} />
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.bannerTitle}>{item.title}</Text>
      </View>
      <View style={globalStyles.discountContainer}>
        <Text style={globalStyles.bannerDiscount}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderService = ({ item }) => (
    <TouchableOpacity style={[globalStyles.serviceGrid1, { backgroundImage: `url(${item.image})` }]}>
      <Image
        source={item.image}
        style={{
          // ...StyleSheet.absoluteFillObject,
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }} />
      <Text style={globalStyles.serviceText1}>{item.title}</Text>
    </TouchableOpacity>
  );

  const SingleItem = ({ item }) => (
    <View style={{
      margin: 16,
      height: 120,
    }}>
      <Image source={require('../assets/images/provider.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute' }} />
      <View style={{ left: '30%', marginVertical: 10, }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 8,
          color: 'black',
        }}>{item.name}</Text>
        <Text style={{
          fontSize: 12,
          color: '#333',
          marginBottom: 8,
        }}>
          {item.description}
        </Text>
        {/* Know More Button */}
        <TouchableOpacity style={{
          backgroundColor: '#ba6cf0',
          paddingVertical: 5,
          paddingHorizontal: 12,
          borderRadius: 8,
          alignSelf: 'flex-start',
        }}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '600',
            }}>Know More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const setRatingForItem = (id, rating) => {
    setRatingData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, rating } : item
      )
    );
  };

  const RatingItem = ({ item, rating, setRating }) => (
    <View style={{
      margin: 16,
      height: 120,
    }}>
      <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute' }} />
      <View style={{ margin: 10, }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 8,
          color: 'black',
        }}>{item.name}</Text>
        <TouchableOpacity style={globalStyles.ratingStars}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <TouchableOpacity key={i} onPress={() => setRating(i)} style={{ marginHorizontal: 5 }}>
                <IconSelector type={ICON_TYPE.FontAwesome5} key={i} name="bone" size={20} color={i <= rating ? "#ffb800" : '#bfbfbf'} />
              </TouchableOpacity>
            ))}
        </TouchableOpacity>
        <Text style={{
          fontSize: 12,
          color: '#333',
          marginBottom: 8,
        }}>
          {item.description}
        </Text>
      </View>
    </View>
  )

  return (
    <>
      <LinearGradient colors={['#ffb5b1', '#f0a4bd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} style={{ backgroundColor: 'red' }}>
        <View style={globalStyles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/infinity.png')}
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.bellCotainer}>
            <Icon name="notifications-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={globalStyles.helloText}>Hello,</Text>
          <Text style={globalStyles.subText}>Fancy for a wash today!</Text>
        </View>

        <Image
          source={require('../assets/images/dog.png')}
          style={globalStyles.dogImage}
        />
        <Image
          source={require('../assets/images/dog2.png')}
          style={[globalStyles.dogImage, { right: '20%' }]}
        />
        <Image
          source={require('../assets/images/cat.png')}
          style={[globalStyles.dogImage, { right: '3%' }]}
        />
      </LinearGradient>
      <ScrollView style={globalStyles.container}>

        <View style={globalStyles.mainView}>
          {/* Search Box */}
          <View style={globalStyles.searchBox}>
            <View style={globalStyles.inputContainer}>
              <IconSelector
                type={ICON_TYPE.Ionicons}
                name="search-outline"
                size={25}
                color="#ff6694"
              />
              <TextInput
                placeholderTextColor={'#ff6694'}
                placeholder="What are you looking for?"
                style={globalStyles.searchInput}
              />
              <TouchableOpacity>
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name="sort-variant"
                  size={25}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Banner */}
          {/* <View style={globalStyles.banner}>
          <Text style={globalStyles.bannerText}>All-New Groomers in Town!</Text>
          <Text style={globalStyles.discountText}>BOOK NOW! -20%</Text>
        </View> */}

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <FlatList
              data={banners}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              snapToInterval={ITEM_WIDTH + 2 * SPACING}
              decelerationRate="fast"
              contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewConfig}
              pagingEnabled={true}
            />
            <View style={globalStyles.dotsContainer}>
              {banners.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <View
                    key={index}
                    style={[globalStyles.dot, isActive ? globalStyles.activeDot : globalStyles.inactive,]}
                  />
                );
              })}
            </View>
          </View>

          {/* Services */}
          <View style={{ flexDirection: 'row', marginHorizontal: 16.5 }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                marginRight: '40%',
              }}>
              {'Popular Service'}
            </Text>
            <IconSelector
              type={ICON_TYPE.Entypo}
              name="dots-three-horizontal"
              size={22}
              color="black"
            />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={services}
              renderItem={renderService}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={{ padding: 10, width: '100%', justifyContent: 'flex-start' }}
            />
          </View>

          {/* Service Providers */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16.5 }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {'Service Providers'}
            </Text>
            <IconSelector
              type={ICON_TYPE.Entypo}
              name="dots-three-horizontal"
              size={22}
              color="black"
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <SingleItem item={item} />}
          />

          {/* Ratings */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16.5 }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {'Ratings'}
            </Text>
            <IconSelector
              type={ICON_TYPE.Entypo}
              name="dots-three-horizontal"
              size={22}
              color="black"
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 16.5 }}>
            <Text
              style={{
                color: '#ff709b',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {'13 Reviews'}
            </Text>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={{
                color: '#ff709b',
                fontWeight: 'bold',
                fontSize: 14,
                marginRight: 10,
              }}>
                {'WRITE A REVIEW'}
              </Text>
              <IconSelector
                type={ICON_TYPE.MaterialCommunityIcons}
                name="square-edit-outline"
                size={22}
                color="#ff6694"
              />
            </TouchableOpacity>
          </View>
          {/* <View style={globalStyles.ratingContainer}>
          <Text style={globalStyles.sectionTitle}>Ratings</Text>
          {['Pooja Jain', 'Pooja Jain'].map((reviewer, index) => (
            <View key={index} style={globalStyles.ratingBox}>
              <Text>{reviewer}</Text>
              <Text>Lorem Ipsum Dolor Sit Amet Consectetur.</Text>
              <TouchableOpacity style={globalStyles.ratingStars}>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <TouchableOpacity onPress={() => setRating(i)} style={{ marginHorizontal: 5, }}>
                      <IconSelector type={ICON_TYPE.FontAwesome5} key={i} name="bone" size={20} color={i <= rating ? "#ffb800" : '#bfbfbf'} />
                    </TouchableOpacity>
                  ))}
              </TouchableOpacity>
            </View>
          ))}
        </View> */}
          <FlatList
            data={ratingData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <RatingItem item={item} rating={item.rating}
              setRating={(rating) => setRatingForItem(item.id, rating)} />}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default MainContent;

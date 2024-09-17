import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Card, Avatar, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from './globalStyles';
import IconSelector, {ICON_TYPE} from './common/IconSelect';

const services = [
  'Pet Grooming',
  'Pet Walking',
  'Pet Dating',
  'Pet Training',
  'Pet Adoption',
];

const MainContent = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <View>
        <View style={globalStyles.header}>
          <TouchableOpacity>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/infinity.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
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
          style={[globalStyles.dogImage, {right: '20%'}]}
        />
        <Image
          source={require('../assets/images/cat.png')}
          style={[globalStyles.dogImage, {right: '3%'}]}
        />
      </View>

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
                type={ICON_TYPE.Ionicons}
                name="search-outline"
                size={25}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View style={globalStyles.banner}>
          <Text style={globalStyles.bannerText}>All-New Groomers in Town!</Text>
          <Text style={globalStyles.discountText}>BOOK NOW! -20%</Text>
        </View>

        {/* Services */}
        <View style={globalStyles.serviceGrid}>
          {services.map((service, index) => (
            <TouchableOpacity key={index} style={globalStyles.serviceBox}>
              <Text style={globalStyles.serviceText}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Service Providers */}
        <Card style={globalStyles.card}>
          <Card.Title
            title="Rohit Singhania"
            subtitle="Lorem Ipsum Dolor Sit Amet Consectetur."
            left={props => (
              <Avatar.Image
                {...props}
                source={{uri: 'https://via.placeholder.com/50'}}
              />
            )}
          />
          <Card.Actions>
            <Button>Know More</Button>
          </Card.Actions>
        </Card>

        {/* Ratings */}
        <View style={globalStyles.ratingContainer}>
          <Text style={globalStyles.sectionTitle}>Ratings</Text>
          {['Pooja Jain', 'Pooja Jain'].map((reviewer, index) => (
            <View key={index} style={globalStyles.ratingBox}>
              <Text>{reviewer}</Text>
              <Text>Lorem Ipsum Dolor Sit Amet Consectetur.</Text>
              <View style={globalStyles.ratingStars}>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Icon key={i} name="star" size={20} color="gold" />
                  ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MainContent;

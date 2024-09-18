import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import globalStyles from './globalStyles';
import { useNavigation } from '@react-navigation/native';
import IconSelector, { ICON_TYPE } from './common/IconSelect';
import { FlatList } from 'react-native-gesture-handler';

const category = [
    {
        name: 'Construction',
        icon: 'construct-outline',
        color: '#cee2ff',
        iconColor: '#165dc9',
    },
    {
        name: 'Entertainment',
        icon: 'musical-notes-outline',
        color: '#ffeac2',
        iconColor: '#ffa800',
    },
    {
        name: 'Pet Care',
        icon: 'paw-outline',
        color: '#ffb5df',
        iconColor: '#ff4d4d',
    },
    {
        name: 'Home Care',
        icon: 'home-outline',
        color: '#c3fcf6',
        iconColor: '#00b894',
    },
    {
        name: 'Events',
        icon: 'calendar-outline',
        color: '#ffcdb2',
        iconColor: '#ff894b',
    },
    {
        name: 'HealthCare',
        icon: 'medkit-outline',
        color: '#d2d2ff',
        iconColor: '#6a5acd',
    },
];

const sectors = [
    { id: 1, title: 'Home Services', image: require('../assets/images/homeservice.png') },
    { id: 2, title: 'Healthcare', image: require('../assets/images/healthcare.png') },
]

const recommend = {
    id: 1,
    status: 'Updated | 06:30 AM',
    description: 'Now share the Construction\nSectors with your anyone and\ncan save it as bookmark',
};


const Categories = () => {

    const navigation = useNavigation();

    const groupedCategories = [
        category.slice(0, 2), // 2 in a row
        category.slice(2, 5), // 3 in a row
        category.slice(5, 6), // 1 in a row
    ];

    const recommededData = Array.from({ length: 2 }, () => recommend);

    const renderCategories = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 15, width: '95%', marginHorizontal: 16.5 }}>
            {item.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        flex: 1,
                        marginHorizontal: 5,
                        backgroundColor: category.color,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        padding: 10,
                        borderRadius: 20,
                        flexDirection: "row",
                        maxWidth: '40%',
                    }}>
                    <IconSelector type={ICON_TYPE.Ionicons} name={category.icon} size={20} color={category.iconColor} />
                    <Text style={{ color: 'black', marginTop: 5, fontSize: 14 }}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )

    const renderSectors = ({ item }) => (
        <TouchableOpacity style={{
            flex: 1, height: 150, marginHorizontal: 16.5,
        }}>
            <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute' }} />
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', margin: 10 }}>{item.title}</Text>
        </TouchableOpacity>
    )

    const renderRecommeded = ({ item }) => (
        <View style={{
            flex: 1, height: 140, margin: 16.5,
        }}>
            <Image source={require('../assets/images/recommended.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute', }} />
            <View style={{ left: '35%', top: '20%' }}>
                <Text style={styles.recommendedText}>{item.description}</Text>
                <Text style={[styles.recommendedText, { fontWeight: 'normal', marginTop: 15, }]}>{item.status}</Text>
            </View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                    padding: 5,
                    paddingHorizontal: 20,
                    backgroundColor: '#995bff',
                    borderRadius: 20,
                }}>
                <Text style={{ color: 'white' }}>{'Explore'}</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <>
            <View style={[globalStyles.header, { backgroundColor: '#ae88ff' }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <IconSelector type={ICON_TYPE.Ionicons} name="menu" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/infinity.png')}
                        style={{ width: 30, height: 30, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#ae88ff' }}>
                <View style={{ backgroundColor: '#ecffce', marginRight: '20%', bottom: -30, borderRadius: 20, padding: 20, borderBottomRightRadius: 50, overflow: 'hidden' }}>
                    <Image
                        source={require('../assets/images/dots.png')}
                        style={{ width: 150, height: 100, resizeMode: 'contain', position: 'absolute', right: -5, top: -5, }}
                    />
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.titleText}>{'Find Your\nSectors!'}</Text>
                    <View style={[globalStyles.searchBox, { backgroundColor: 'white' }]}>
                        <View style={globalStyles.inputContainer}>
                            <IconSelector
                                type={ICON_TYPE.Ionicons}
                                name="search-outline"
                                size={25}
                                color="#ff6694"
                            />
                            <TextInput
                                placeholderTextColor={'#a8a8a8'}
                                placeholder="What are you looking for?"
                                style={globalStyles.searchInput}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16.5 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            {'Explore Categories'}
                        </Text>
                        <IconSelector
                            type={ICON_TYPE.Entypo}
                            name="dots-three-horizontal"
                            size={22}
                            color="black"
                        />
                    </View>
                    <FlatList
                        data={groupedCategories}
                        renderItem={item => renderCategories(item)}
                        keyExtractor={(item, index) => index}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16.5 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            {'Popular Sectors'}
                        </Text>
                        <IconSelector
                            type={ICON_TYPE.Entypo}
                            name="dots-three-horizontal"
                            size={22}
                            color="black"
                        />
                    </View>
                    <FlatList
                        data={sectors}
                        renderItem={item => renderSectors(item)}
                        keyExtractor={(item, index) => index}
                        numColumns={2}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16.5 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            {'Recommended For You'}
                        </Text>
                        <IconSelector
                            type={ICON_TYPE.Entypo}
                            name="dots-three-horizontal"
                            size={22}
                            color="black"
                        />
                    </View>
                    {/* <View style={styles.recommendedContainer}>
                        <View style={styles.recommendedCard}>
                            <Text style={styles.recommendedText}>Now share the Construction Sectors with anyone and save it as a bookmark</Text>
                        </View>
                        <View style={styles.recommendedCard}>
                            <Text style={styles.recommendedText}>Now share the Construction Sectors with anyone and save it as a bookmark</Text>
                        </View>
                    </View> */}
                    <FlatList data={recommededData} renderItem={item => renderRecommeded(item)} keyExtractor={(item, index) => index} />
                </View>
            </ScrollView >

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    welcomeText: {
        fontSize: 22,
        color: 'black',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    subtitleText: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#FFFFFF',
        marginVertical: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    categoryButton: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16.5
    },
    categoryText: {
        color: 'black',
        fontWeight: 'bold',
    },
    popularContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    popularCard: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
    },
    popularText: {
        color: '#A4508B',
        fontWeight: 'bold',
    },
    recommendedContainer: {
        marginVertical: 20,
    },
    recommendedCard: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    recommendedText: {
        color: '#060047',
        fontSize: 14,
        fontWeight: 'bold'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    navItem: {
        color: '#A4508B',
        fontWeight: 'bold',
    },
});

export default Categories;

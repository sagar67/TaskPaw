import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2a7bc',
  },
  mainView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
  },
  bellContainer: {borderRadius: 5, padding: 10, backgroundColor: '#fcc1c3'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  dogImage: {
    position: 'absolute',
    right: '35%',
    bottom: -10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    zIndex: 1,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16.5,
  },
  subText: {
    fontSize: 16,
    color: '#7D7D7D',
    marginLeft: 16.5,
    color: 'black',
    marginBottom: 30,
  },
  searchBox: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#ffedf2',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    color: 'black',
  },
  banner: {
    margin: 20,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 15,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  discountText: {
    fontSize: 14,
    marginTop: 10,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
  },
  serviceBox: {
    width: '45%',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  ratingContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingBox: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  ratingStars: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
});

export default globalStyles;

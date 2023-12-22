import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    borderRadius: 20,
    margin: 5,
  },
  image_container: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 22,
  },
  info_container: {
    margin: 15,
    marginTop: 0,
  },
  product_image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    borderRadius: 22,
  },
  product_name: {
    fontWeight: '700',
    fontSize: 22,
    color: 'black',
  },
  product_price: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5,
  },
  product_outOfStock: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 8,
  },
  product_inStock: {},
});

import React from 'react';
import styles from './product.style';
import {Image, Text, View} from 'react-native';

function Product(product) {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.product_image}
          source={{uri: product.product_datas.imgURL}}
        />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.product_name}>{product.product_datas.title}</Text>
        <Text style={styles.product_price}>{product.product_datas.price}</Text>
        {product.product_datas.inStock ? (
          ''
        ) : (
          <Text style={styles.product_outOfStock}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  );
}

export default Product;

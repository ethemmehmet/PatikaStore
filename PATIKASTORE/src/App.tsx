import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
} from 'react-native';
import ProductCard from './components/product';
import product_data from './products_data.json';

interface productItem {
  id: number;
}

function App() {
  const renderProducts = ({item}: {item: productItem}) => (
    <ProductCard product_datas={item} />
  );

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.second_container}>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <View style={styles.headerbox}>
                <Text style={styles.headertext}>PATİKASTORE</Text>
              </View>
              <View style={styles.searchbox}>
                <TextInput style={styles.textinput} placeholder="Ara..." />
              </View>
            </View>
          )}
          data={product_data}
          renderItem={renderProducts}
          numColumns={2}
          columnWrapperStyle={styles.wrapper}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 5,
  },
  second_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headertext: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerbox: {
    padding: 12,
  },
  searchbox: {
    backgroundColor: '#eceff1',
    marginHorizontal: 5,
    borderRadius: 12,
    marginBottom: 5,
  },
  textinput: {
    marginLeft: 10,
    fontSize: 18,
  },
  wrapper: {},
});

export default App;

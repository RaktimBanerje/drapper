import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { Image } from 'react-native';


const Product = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const product = {
        id: "1",
        name: "Hair Gel",
        price: "90",
        star: "4.8",
        thumbnail: require("../assets/thumbnail.png"),
        images: [
            require("../assets/product1.png"),
            require("../assets/product1.png"),
            require("../assets/product1.png")
        ]
    }

    const loadData = () => {
        setLoading(true)
    }

    const onRefresh = () => {
        setRefreshing(true)
        loadData()
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }
        
        React.useEffect(() => {
            loadData()
        }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Image 
                    style={{
                        width: "100%",
                        borderRadius: 8
                    }}
                    resizeMode='cover'
                    source={product.thumbnail}
                />

                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={require("../assets/product1.png")}
                    />

                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={require("../assets/product2.png")}
                    />


                    <Image 
                        style={{
                            width: "32%",
                            height: 80,
                            borderRadius: 8
                        }}
                        resizeMode='cover'
                        source={require("../assets/product4.png")}
                    />
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                    <View>
                        <Text style={{fontSize: 22, fontFamily: "Poppins_500Medium"}}>{product.name}</Text>
                        <View style={{flexDirection: "row"}}>
                            <AntDesign name="star" size={15} color="#F9B53F" style={{marginTop: 3, marginRight: 4}} /> 
                            <Text style={{fontSize: 18, fontFamily: "Poppins_500Medium"}}>{product.star}</Text>
                        </View>
                    </View>
                    
                    <Text style={{fontSize: 22, fontFamily: "Poppins_500Medium"}}>$ {product.price}</Text>
                </View>

                <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => navigation.navigate("Cart")}>Add to cart</Button>
                <Button buttonStyle={styles.secondaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => send()}>Buy now</Button>

                
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 25, fontFamily: "Poppins_500Medium"}}>About product</Text>
                    <Text style={{fontSize: 15, fontFamily: "Poppins_500Medium", color: "#575757"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Text>

                    <Text style={{fontSize: 25, fontFamily: "Poppins_500Medium"}}>Product descriptions</Text>
                    <Text style={{fontSize: 15, fontFamily: "Poppins_500Medium", color: "#575757"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Text>
                </View>

            </ScrollView>   
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 10
  },
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#AE8447",
    marginTop: 28,
    marginBottom: 10
  },
  secondaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#263238",
    marginBottom: 35
  }
})

export default Product
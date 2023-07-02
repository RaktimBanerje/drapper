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

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Cart = ({navigation}) => {
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
                <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: 15}}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            style={{
                                width: "40%",
                                height: 80,
                                borderRadius: 8
                            }}
                            resizeMode='cover'
                            source={require("../assets/product1.png")}
                        />

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18}}>Hair Gel</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16, color: "#6C6C6C"}}>Quantity 01</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16}}>$ 90</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <View>
                            <Entypo name="cross" size={20} color="black" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                            <Entypo name="circle-with-plus" size={24} color="#D9D9D9" />
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, marginHorizontal: 5}}>1</Text>
                            <MaterialCommunityIcons name="minus-circle" size={24} color="#D9D9D9" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: 15}}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            style={{
                                width: "40%",
                                height: 80,
                                borderRadius: 8
                            }}
                            resizeMode='cover'
                            source={require("../assets/product2.png")}
                        />

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18}}>Hair Gel</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16, color: "#6C6C6C"}}>Quantity 01</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16}}>$ 90</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <View>
                            <Entypo name="cross" size={20} color="black" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                            <Entypo name="circle-with-plus" size={24} color="#D9D9D9" />
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, marginHorizontal: 5}}>1</Text>
                            <MaterialCommunityIcons name="minus-circle" size={24} color="#D9D9D9" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: 15}}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            style={{
                                width: "40%",
                                height: 80,
                                borderRadius: 8
                            }}
                            resizeMode='cover'
                            source={require("../assets/product3.png")}
                        />

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18}}>Hair Gel</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16, color: "#6C6C6C"}}>Quantity 01</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16}}>$ 90</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <View>
                            <Entypo name="cross" size={20} color="black" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                            <Entypo name="circle-with-plus" size={24} color="#D9D9D9" />
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, marginHorizontal: 5}}>1</Text>
                            <MaterialCommunityIcons name="minus-circle" size={24} color="#D9D9D9" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginBottom: 15}}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            style={{
                                width: "40%",
                                height: 80,
                                borderRadius: 8
                            }}
                            resizeMode='cover'
                            source={require("../assets/product4.png")}
                        />

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18}}>Hair Gel</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16, color: "#6C6C6C"}}>Quantity 01</Text>
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 16}}>$ 90</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <View>
                            <Entypo name="cross" size={20} color="black" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                            <Entypo name="circle-with-plus" size={24} color="#D9D9D9" />
                            <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, marginHorizontal: 5}}>1</Text>
                            <MaterialCommunityIcons name="minus-circle" size={24} color="#D9D9D9" />
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>   

            <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => navigation.navigate("Bill")}>Check Out</Button>
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

export default Cart
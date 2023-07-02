import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, RefreshControl, ScrollView, TextInput } from 'react-native'
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


const Bill = ({navigation}) => {
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
                <Text style={{fontFamily: "Poppins_500Medium", fontSize: 20}}>Billing address</Text>
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={() => {}}
                    placeholder="Full name"
                    onPressIn={() => {}}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={() => {}}
                    placeholder="Contact number"
                    onPressIn={() => {}}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={() => {}}
                    placeholder="Full address"
                    onPressIn={() => {}}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    cursorColor="black"
                    value={() => {}}
                    placeholder="ZIP Code"
                    onPressIn={() => {}}
                    autoCorrect={false}
                />
            </ScrollView>   

            <Button buttonStyle={styles.primaryButtonStyle} loading={isSubmitting} disabled={isSubmitting} onPress={() => {}}>Continue to Payment</Button>
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
  },  
  input: {
    height: 45,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    fontSize: 18
  },  
})

export default Bill
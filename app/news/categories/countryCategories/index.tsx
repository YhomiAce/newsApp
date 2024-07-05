import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { countries } from '../../../../constants/countries'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const AllCountries = () => {
  const router = useRouter()
  return (
    <LinearGradient
      style={styles.container}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
    >
      <FlatList 
        data={countries}
        keyExtractor={(item) => item.code}
        renderItem={({item}) => (
          <TouchableOpacity
          style={styles.countryContainer}
          onPress={() => {
            router.push({
              pathname: '/news/countries',
              params: {
                country: item.code
              }
            })
          }}
          >
            <MaterialIcons
              // @ts-ignore
              name={item.icon}
              size={32}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.countryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </LinearGradient>
  )
}

export default AllCountries

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  countryContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  icon: {
    marginRight: 8,
  },
  countryText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
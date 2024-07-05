import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { categories } from "../../../constants/categories";
import { MaterialIcons } from "@expo/vector-icons";

const AllCategories = () => {
  const router = useRouter();
  return (
    <LinearGradient
      style={styles.container}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
    >
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => {
              router.push(`/news/categories/${item.name}`);
            }}
          >
            <MaterialIcons
              // @ts-ignore
              name={item.icon}
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </LinearGradient>
  );
};

export default AllCategories;

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
  categoryContainer: {
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
  categoryText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
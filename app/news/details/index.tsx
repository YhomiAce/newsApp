import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const NewsDetails = () => {
  const params = useLocalSearchParams();
  console.log(params);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      {params.urlToImage && (
        <Image
          source={{ uri: params.urlToImage as string }}
          style={styles.image}
        />
      )}
      <Text style={styles.description}>{params.description}</Text>
      <Text style={styles.content}>{params.content}</Text>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  content: {
    fontSize: 14,
    color: "#555",
  },
});

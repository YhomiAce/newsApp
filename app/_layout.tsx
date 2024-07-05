import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../lib/react-query/query-client";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/everything/index"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/categories/countryCategories/index"
          options={{
            title: "All Countries",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="flag" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/categories/index"
          options={{
            title: "Categories",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        {/* Hidden Tabs */}
        <Tabs.Screen
          name="news/categories/[newsByCategory]"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="news/details/index"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="news/countries/index"
          options={{
            href: null,
            headerShown: false,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}

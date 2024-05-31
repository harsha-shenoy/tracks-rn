import React from "react";
import {  StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>TrackList Screen</Text>
      <Button title="Go to Track Details" onPress={() => navigation.navigate('TrackDetail')}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

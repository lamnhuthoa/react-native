import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({title, imageScore}) => {
  return (
    <View>
      <Image source={{uri: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default ImageDetail;

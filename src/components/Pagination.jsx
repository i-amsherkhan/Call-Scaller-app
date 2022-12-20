import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ApiContext } from "../context/ContextProvider";

const Pagination = () => {
  const { totalPosts, postsPerPage, paginate } = useContext(ApiContext); 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  

  const myList = pageNumbers.map((number) => (
    <Text
      className="text-black"
      onPress={(number) => paginate(number)}
      key={number}
    >
      {number}
    </Text>
  ));

  return (
    <View className="bg-yellow-300 border border-sky-400 py-96 mx-5 ">
      {myList}   
    </View>
  );
};

export default Pagination;

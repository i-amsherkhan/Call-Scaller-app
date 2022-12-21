import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ApiContext } from "../context/ContextProvider";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

const Pagination = () => {
  const {
    totalPosts,
    postPerPage,
    paginate,
    indexOfFirtPosts,
    indexOfLastPosts,
    nextPage,
    prevPage,
  } = useContext(ApiContext);

  const pageNumbers = []; 
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View className="justify-between mx-2 pb-2">
      <View className="mt-2">
        <Text>
          Showing {indexOfFirtPosts + 1} to {indexOfLastPosts} of {totalPosts}{" "}
          results
        </Text>
      </View>

      <View className="inline-flex -space-x-px flex-row justify-start mt-2">
        <View
          className={`px-3 py-2 leading-tight  
           border border-gray-300  bg-white text-gray-500`}
        >
          <ChevronLeftIcon size={15} color="black" onPress={prevPage} />
        </View>
        {pageNumbers.map((number) => (
          <Text
            className={`px-3 py-2 leading-tight  border border-gray-300 bg-white text-gray-500`}
            onPress={() => paginate(number)}
            key={number}
          >
            {number}
          </Text>
        ))}
        <View
          className={`px-3 py-2 leading-tight  
           border border-gray-300  bg-white text-gray-500`}
        >
          <ChevronRightIcon size={15} color="black" onPress={nextPage} />
        </View>
      </View>
    </View>
  );
};

export default Pagination;

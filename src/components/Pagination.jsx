import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ApiContext } from "../context/ContextProvider";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { ChevronDownIcon } from "react-native-heroicons/solid";

const Pagination = () => {
  const {
    totalPosts,
    postPerPage,
    paginate,
    indexOfFirstPosts,
    indexOfLastPosts,
    nextPage,
    prevPage,
  } = useContext(ApiContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View className="justify-between mx-2 pb-5 bg-blue-500">
      <View className="mt-2 justify-center">
        <Text className="text-center">
          Showing {indexOfFirstPosts + 1} to {indexOfLastPosts < totalPosts ? indexOfLastPosts : totalPosts } of {totalPosts}{" "}
          results
        </Text>
      </View>

      <View className="inline-flex -space-x-px flex-row justify-center mt-2 py-2">
        <View className="bg-white py-1 px-2 rounded-md flex-row-reverse items-center ml-2">
          <ChevronDownIcon size={12} color="black" />
          <Text className="mx-2 text-xs">25</Text>
        </View>

        <View
          className={`px-3 py-2 leading-tight  
           border border-gray-300  bg-white text-gray-500`}
        >
          <ChevronLeftIcon size={15} color="black" onPress={prevPage} />
        </View>

        <View className="flex-row">
          {pageNumbers.map((number) => (
            <Text
              className={`px-3 py-2 leading-tight  border border-gray-300 bg-white text-gray-500`}
              onPress={() => paginate(number)}
              key={number}
            >
              {number}
            </Text>
          ))}
        </View>

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

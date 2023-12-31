import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useAvailableFilters = () => {
  const API: APIService | null = React.useContext(APIContext);

  const getCategories = () =>
    useQuery<any, Error>(["available_catagories"], () => API?.AvailableFilters.getCategories(), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  return { getCategories };
};

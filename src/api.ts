import axios from "axios";

import { TData } from "./types";

export const getData = async (): Promise<TData> => {
  const data: any = await axios
    .get("https://images-api.nasa.gov/search?q=Earth&media_type=image")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("error", err));

  const {
    collection: { items },
  } = await data;
  console.log(items);
  return items;
};

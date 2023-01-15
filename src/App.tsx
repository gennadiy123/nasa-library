import { useState, useEffect } from "react";
import styled from "styled-components";

import { TData, TDataItem } from "./types";
import { getData } from "./api";
import { SearchBar } from "./SearchBar";

const StyledImage = styled.img`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

function App() {
  const [data, setData] = useState<TData>();
  useEffect(() => {
    getData().then((item) => setData(item));
  }, []);

  return (
    <>
      <h1>NASA Library</h1>
      <SearchBar />
      {data &&
        data?.map((item: TDataItem) => (
          <StyledImage
            key={item?.data?.[0]?.nasa_id}
            src={item?.links?.[0]?.href}
            alt={item?.data?.[0]?.title}
          />
        ))}
    </>
  );
}

export default App;

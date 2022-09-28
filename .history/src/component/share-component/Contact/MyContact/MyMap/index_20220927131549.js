import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MyMap = () => {
  return (
    <div className="map-container">
      <Wrapper apiKey={"64c38751d0ed4e3b86fdb94d0e3865a6"}>
        <MyMapComponent />
      </Wrapper>
    </div>
  );
};

export default MyMap;

import React from "react";
import CContainer from "../components/CContainer";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <CContainer>
      <Box sx={{ my: 2 }}>
        {[...new Array(100)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
    </CContainer>
  );
};

export default Home;

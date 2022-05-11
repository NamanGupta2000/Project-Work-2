import React from "react";
import styled from "styled-components";
import Announcement from "./Announcement";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  padding-bottom: 12%;
  text-align: center;
`;


const Confirmation = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Order Confirmed</Title>
       </Wrapper>
      <Footer />
    </Container>
  );
};

export default Confirmation;
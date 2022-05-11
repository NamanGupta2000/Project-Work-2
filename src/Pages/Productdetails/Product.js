import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../Components/Announcement";
import Newsletter from "../../Components/Newsletter";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  border: 2px solid black;
  border-radius: 2%;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 5px;
  border: 2px solid teal;
  background-color: rgb(99, 156, 156);
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: teal;
  }
`;

const Product = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
        </ImgContainer>
        <InfoContainer>
          <Title>Nike Air Force 1 </Title>
          <Desc>
          The radiance lives on in the Nike Air Force 1 '07 Next Nature—the basketball original that lets you do good by looking good. Made from at least 20% recycled materials by weight, it keeps everything you love best: tried and true AF-1 style and comfortable cushioning.
          Colour Shown: White/Metallic Gold/Light Orewood Brown
          Style: DN1430-101
          </Desc>
          <Price>₹11,495</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button onClick={() => navigate('/cart')}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer/>
    </Container>
  );
};

export default Product;
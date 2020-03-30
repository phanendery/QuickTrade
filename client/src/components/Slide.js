import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import stopwatch from "../assets/videos/stopwatch.gif";
import money from "../assets/videos/money.gif";
import lock from "../assets/videos/lock.gif";
import styled from "styled-components";

const Header = styled.h1`
  font-family: dinPro-light;
  font-size: 25px;
`;

const PHolder = styled.p`
  font-family: dinPro-light;
  font-size: 14px;
`;

const ImageHolder = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding-bottom: 20px;
`;

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <ImageHolder src={stopwatch}></ImageHolder>
              <Header>Keep tabs on your money</Header>
              <PHolder>
                Set up customized news and notifications to stay on top of your
                assets as casually or as relentlessly as you like. Controlling
                the flow of info is up to you.
              </PHolder>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <ImageHolder src={money}></ImageHolder>
              <Header>Account Protection</Header>
              <PHolder>
                Robinhood Financial is a member of SIPC. Securities in your
                account are protected up to $500,000. For details, please see
                www.sipc.org.
              </PHolder>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <ImageHolder src={lock}></ImageHolder>
              <Header>Commission-free stock trading.</Header>
              <PHolder>
                We’ve cut the fat that makes other brokerages costly, like
                manual account management and hundreds of storefront locations,
                so we can offer zero commission trading.
              </PHolder>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;

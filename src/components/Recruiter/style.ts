import styled from 'styled-components/macro';

export const Container = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 10px;
  position: fixed;
  display: flex;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 250px;
  height: 40px;
  z-index: 9;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    top: -5px;
    height: 90px;
    position: absolute;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

  img {
    border-radius: 50%;
    width: 55px;
    height: 55px;
  }
`;

export const Description = styled.div`
  padding: 10px 10px 0 0px;
  width: 80%;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    padding: 10px 5px 0 0px;
  }

  h4 {
    font-size: 12px;
    margin: 0;
  }

  p {
    font-size: 12px;

    margin: 0;
  }
  a:link,
  a:visited {
    color: #000;
  }
`;

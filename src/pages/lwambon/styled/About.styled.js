import styled from "styled-components";

const AboutContent = styled.div`
  .about-me {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 1.4rem;
  }
  .about-content-area {
    display: flex;
    flex-wrap: wrap;
    margin-left: 2rem;
    gap: 2.9rem;
    margin: 2rem;
    width: 100%;
    p {
      width: 58%;
      line-height: 1.9;
      box-shadow: 0 0 2rem;
      padding: 2.4rem;
      font-size: 1.4rem;
    }
  }
  .image-about {
    align-items: center;

    img {
      width: 29rem;
      align-items: center;
      margin-left: 8rem;
      border-radius: 50rem;
      box-shadow: 0 0 4rem;
    }
  }
`;

export default AboutContent;
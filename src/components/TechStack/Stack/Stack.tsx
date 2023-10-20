import { IStack } from "common/interfaces/IStack";
import styled from "styled-components";

const StyledStack = styled.div`
  width: fit-content;
  margin: 0 1rem;

  img {
    width: 150px;
    height: 150px;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

export function Stack({name, imgPath, imgAlt, externalLink} : IStack) {
  return (
    <StyledStack>
      <a
        href={externalLink ? externalLink : '#'}
        target="_blank"
        rel="noreferrer"
      >
        <img src={imgPath} alt={imgAlt} />
        <h3>{name}</h3>
      </a>
    </StyledStack>
  );
}

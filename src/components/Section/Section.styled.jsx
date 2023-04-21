import styled from '@emotion/styled';

export const SectionDiv = styled.div`
  padding: 20px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(1) {
    width: 420px;
    box-shadow: 8px 0px 13px -6px rgba(0, 0, 0, 0.75);
    background-color: #b7a99f;
  }

  &:nth-of-type(2) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  padding: 20px;
`;

export const SectionMainTitle = styled.h1`
  padding: 20px;
`;

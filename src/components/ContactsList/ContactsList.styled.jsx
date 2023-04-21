import styled from '@emotion/styled';

export const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 20px;

  width: 90%;

  padding: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 15px; /* ширина для вертикального скролла */
    background-color: #b7a99f;
    border-radius: 9em;
  }

  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #5d534b8a;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
    transition: 0.5s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #715b4b;
  }
`;

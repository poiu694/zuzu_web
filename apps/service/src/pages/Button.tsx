import styled from "@emotion/styled";

function Button() {
  return <Wrapper>hi</Wrapper>;
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export { Button };

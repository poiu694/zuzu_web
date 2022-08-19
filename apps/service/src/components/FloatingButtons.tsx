import styled from "@emotion/styled";
import { Button, ButtonHierarchy } from "design-system";
import React from "react";

interface FloatingButtonsProps extends React.ComponentProps<"div"> {
  handleClickLeftButton?: () => void;
  handleClickRightButton?: () => void;
}

function FloatingButtons({
  handleClickLeftButton,
  handleClickRightButton,
  ...restProps
}: FloatingButtonsProps) {
  return (
    <Wrapper {...restProps}>
      <Button
        width={"30%"}
        onClick={handleClickLeftButton}
        hierarchy={ButtonHierarchy.Secondary}
      >
        확인
      </Button>
      <Button
        width={"70%"}
        onClick={handleClickRightButton}
        hierarchy={ButtonHierarchy.Primary}
      >
        공유하기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 8px;
`;

export default FloatingButtons;

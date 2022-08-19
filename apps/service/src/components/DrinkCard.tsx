import styled from "@emotion/styled";
import { theme, Text, Tag } from "design-system";
import React from "react";
import DrinkImage from "./DrinkImage";

export type DrinkCardType = "typeA" | "typeB" | "winner";
export interface Drink {
  id: number;
  name: string;
  abv: number;
  imageUrl: string;
  category: {
    id: number;
    name: string;
    imageUrl: string;
  };
}

interface DrinkCardProps extends React.ComponentProps<"div"> {
  type: DrinkCardType;
  drink: Drink;
  isActive?: boolean;
  isShowingTag?: boolean;
  handleClickSearchIcon?: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

function DrinkCard({
  type,
  drink,
  isActive,
  isShowingTag = true,
  handleClickSearchIcon,
  ...restProps
}: DrinkCardProps) {
  return (
    <Wrapper {...restProps}>
      <DrinkImage
        imgSrc={drink.imageUrl}
        type={type}
        isActive={isActive}
        handleClickSearchIcon={handleClickSearchIcon}
      />
      <DescriptionWrapper>
        <Text type="body5" color={theme.colors.text.highlight}>
          {drink.category.name}
        </Text>
        <Text type="body5" color={theme.colors.ui.divider}>
          |
        </Text>
        <Text type="body5" color={theme.palette.purple50}>
          Alc {drink.abv}%
        </Text>
      </DescriptionWrapper>
      <DrinkName display="-webkit-box" type="button1">
        {drink.name}
      </DrinkName>
      {isShowingTag && <Tag tags={["대낮에", "한밤에", "친구와", "연인과"]} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const DrinkName = styled(Text)`
  margin: 8px auto;
  word-break: keep-all;
  min-height: 44px;

  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export default DrinkCard;
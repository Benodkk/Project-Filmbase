import { StyledDiv } from "../../components/styles/shared/Div.style";
import { StyledHorizontalRow } from "../../components/styles/shared/HorizotalSpace.style";
import { StyledTypeSelect } from "../../components/styles/shared/MainSite/StyledTypeSelect.style";
import { useTheme } from "styled-components";

const SelectType = ({ sliderType, setSliderType, types }) => {
  const theme = useTheme();
  return (
    <StyledHorizontalRow>
      {types.map((element) => {
        return (
          <StyledTypeSelect
            onClick={() => setSliderType(element.label)}
            selected={sliderType === element.label ? true : false}
          >
            <StyledDiv
              fontWeight={700}
              color={
                sliderType === element.label
                  ? theme.colors.white
                  : theme.colors.grey
              }
            >
              {element.value}
            </StyledDiv>
          </StyledTypeSelect>
        );
      })}
    </StyledHorizontalRow>
  );
};

export default SelectType;

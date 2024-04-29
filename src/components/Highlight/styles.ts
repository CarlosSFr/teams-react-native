import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    margin: 32px 0;

`

export const Title = styled.Text`
    text-align: center;

    font-size: ${props => props.theme["FONT_SIZE"].XL}px;
    font-family: ${props => props.theme["FONT_FAMILY"].BOLD}px;
    color: ${props => props.theme["COLORS"].WHITE};
`

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${props => props.theme["FONT_SIZE"].MD}px;
    font-family: ${props => props.theme["FONT_FAMILY"].REGULAR}px;
    color: ${props => props.theme["COLORS"].GRAY_300};
`


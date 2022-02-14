import styled from 'styled-components/native';
export const ButtonView = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${props =>
    props.disabled ? '#cb8f90' : props.bgColor || '#a94446'};
  align-self: center;
  flex-direction: row;
  width: ${props => props.width || '297px'};
  height: ${props => props.height || '50px'};
  elevation: ${props => props.elevation || 0};
`;

export const ButtonText = styled.Text`
  font-size: ${props => props.fontSize || '16px'};
  text-align: left;
  margin-vertical: ${props => props.marginVertical || '15px'};
  color: ${props => props.color || '#fff'};
  line-height: ${props => props.lineHeight || '20px'};
  letter-spacing: ${props => props.letterSpacing || '-0.38px'};
  font-family: ${props => props.fontFamily || 'ProximaNova-Bold'};
`;

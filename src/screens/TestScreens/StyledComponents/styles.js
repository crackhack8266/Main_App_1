import styled from 'styled-components/native';

export const Container = styled.View`
  width: 250px;
  background-color: ${props => props.bgColor};
  height: ${props => props.height};
  margin-left: ${props => props.marginLeft};
`;

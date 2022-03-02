// import styled, { css } from "styled-components";
import styled from "styled-components";

export const PageHeader = styled.div`
  min-height: 80px;
  display: block;
  // background-color: ${(props) => props.theme.bgColor.secondary};
  color: ${(props) => props.theme.color.primary};
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  margin-bottom: 10px;
`;

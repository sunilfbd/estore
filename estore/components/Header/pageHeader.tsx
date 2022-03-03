import styled from "styled-components";

export const PageHeader = styled.div`
  min-height: 80px;
  display: block;
  color: ${(props) => props.theme.color.primary};
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 200px;
`;

export const ServiceMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  margin-left: auto;
`;

export const ServiceMenuItem = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0 0 0 20px;
  &:first-child {
    margin-left: 0;
  }
`;

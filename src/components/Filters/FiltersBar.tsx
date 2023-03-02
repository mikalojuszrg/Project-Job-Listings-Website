import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ContainerProps extends PropsWithChildren {
  toggle: boolean;
}

const FiltersBar = ({ toggle, children }: ContainerProps) => {
  return <Container toggle={toggle}>{children}</Container>;
};

export default FiltersBar;

const Container = styled.div<ContainerProps>`
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  gap: 12px;
  flex-wrap: wrap;
`;

import styled from "styled-components";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

import styled from "styled-components";

// input type=["text" | "email" | "password"]만 허용
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "email" | "password";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
`;

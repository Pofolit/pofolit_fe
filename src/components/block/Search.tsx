import styled from "styled-components";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { BiSearch } from "react-icons/bi";


export default function Search() {
  return (
    <SearchWrap>
      <label>
        <Input type="text" />
      </label>
      <Button>
        <SearchIcon />
      </Button>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  display: flex;
  border: 1px solid #000;
  gap: 0.5rem;
  & > label {
    width: 100%;
    padding: 1rem;
  }
  & > button {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;

const SearchIcon = styled(BiSearch)`
  font-size: 2rem;
  font-weight: bold;
`

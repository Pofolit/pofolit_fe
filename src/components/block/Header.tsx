import styled from "styled-components";
import Search from "./Search";
import Button from "../atom/Button";
import { BiBell } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiChat } from "react-icons/bi";

export default function Header() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <HeaderWrap>
      <LogoWrap>
        <a href="/">POFOLIT</a>
      </LogoWrap>
      <InputWrap>
        <form onSubmit={handleSubmit}>
          <Search />
        </form>
      </InputWrap>
      <ActionWrap>
        <ul>
          <li>
            <Button>
              <BiBell />
            </Button>
          </li>
          <li>
            <Button>
              <BiChat />
            </Button>
          </li>
          <li>
            <Button>
              <BiUser />
            </Button>
          </li>
        </ul>
      </ActionWrap>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100%;
  padding: 2rem 4rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const LogoWrap = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const InputWrap = styled.div`
  width: 30%;
`;

const ActionWrap = styled.div`
  width: 20%;
  & > ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  & li > button {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

import styled from "styled-components";
import Search from "./Search";
import Button from "../atom/Button";
import { BiBell } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
	const [popupType, setPopupType] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	// popupType 설정
	const handlePopupShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const value = e.currentTarget.value;
		setPopupType(prev => (prev === value ? "" : value));
	};

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
						<Button value="alert" onClick={e => handlePopupShow(e)}>
							<BiBell />
						</Button>
					</li>
					<li>
						<Button value="chat" onClick={e => handlePopupShow(e)}>
							<BiChat />
						</Button>
					</li>
					<li>
						<Button>
							<BiUser />
						</Button>
					</li>
				</ul>
				{popupType === "alert" && (
					<PopupWrap>
						<h2>읽지 않은 알람(0)</h2>
						<ul>
							<li>알람 목록1</li>
							<li>알람 목록2</li>
							<li>알람 목록3</li>
							<li>알람 목록4</li>
						</ul>
						<NavLink href="#">모두 보기</NavLink>
					</PopupWrap>
				)}
				{popupType === "chat" && (
					<PopupWrap>
						<h2>메세지</h2>
						<ul>
							<li>채팅 목록1</li>
							<li>채팅 목록2</li>
							<li>채팅 목록3</li>
							<li>채팅 목록4</li>
						</ul>
						<NavLink href="#">모두 보기</NavLink>
					</PopupWrap>
				)}
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
	position: relative;
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

const PopupWrap = styled.div`
	width: 40rem;
	height: 50rem;
	position: absolute;
	top: 5rem;
	right: 0;
	z-index: 999;
	background-color: #fff;
	border: 1px solid var(--black-color);
	h2 {
		padding: 2rem 4rem;
		font-size: 1.4rem;
		font-weight: bold;
		border-bottom: 1px solid var(--black-color);
	}
	ul {
		overflow-y: auto;
	}
	ul > li {
		padding: 2rem 4rem;
		font-size: 1.4rem;
	}
	li ~ li {
		border-top: 1px solid var(--black-color);
	}
`;

const NavLink = styled.a`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	text-align: center;
	font-size: 1.2rem;
	padding: 2rem 4rem;
	border-top: 1px solid var(--black-color);
`;

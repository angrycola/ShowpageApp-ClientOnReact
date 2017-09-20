import React from 'react';
import '../../styles/header.css';

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="header-container">
				<div>
					<a href="/" className="header-logo">
						<h1>Облако знаний</h1>
					</a>
				</div>
				<div className="header-nav">
					<button className="header-nav-button">Курсы</button>
					<button className="">Регистрация</button>
					<button className="">Вход</button>
					<button className="">Корзина</button>
				</div>
			</div>
		</div>
	);
};

export default Header;

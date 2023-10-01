import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import './index.css'	

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink className = 'texto' to="/inicio" activeStyle>
						Inicio
					</NavLink>
					<NavLink className = 'texto' to="/cuenta" activeStyle>
						Cuenta
					</NavLink>
					<NavLink className = 'texto' to="/pedidos" activeStyle>
						Mis Pedidos
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;

import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" >
                {/* <Container> */}
                <NavbarBrand href="/dashboard">Alarm Dashboard</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/alarm">Detail Alarm</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Hygiene Summary</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hg_check">Request Job HG</NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink href="/" onClick={() => localStorage.clear()}>Logout</NavLink>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
}

export default NavbarComp;
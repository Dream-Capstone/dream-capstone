import {useJwtToken} from "../hooks/useJwtHook";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {SignUpModal} from "./main-nav/sign-up/SignUpModal";
import {SignInModal} from "./main-nav/sign-in/SignInModal";
import {useState} from "react";
import {SignOutComponent} from "./main-nav/SignOut";

export const TopNav = () => {
    const {profile} = useJwtToken()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const isModalOpen = () => {
        if(!profile) {
            return !profile
        } else if(show && profile) {
            return true
        }
    }

    return(
        <Navbar bg="primary" variant="dark">
            <Container>

                <Link className={"nav-link"} to="/">
                    <Navbar.Brand>Dreamery</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    {profile !== null && (
                    <>
                    <NavDropdown className="nav-link navbar-username" title={profile.profileHandle}>
                        <div className="dropdown-item">
                            <Link to={`/profile/${profile?.profileHandle}`} className="btn btn-outline-dark">
                                <FontAwesomeIcon icon="user"/>&nbsp;&nbsp;My Profile
                            </Link><br></br>
                            <Link to={`/category-main`} className="btn btn-outline-dark">
                                <FontAwesomeIcon icon="user"/>&nbsp;&nbsp;Category
                            </Link>
                        </div>
                        <SignOutComponent/>
                    </NavDropdown>
                    </>
                    )}
                    {isModalOpen() && (
                        <>
                        <SignUpModal/>
                        <SignInModal show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}/>
                        </>
                        )}
                </Nav>
            </Container>
        </Navbar>
    )
};
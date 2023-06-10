import {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {SignUpModal} from "./sign-up/SignUpModal.tsx";
import {SignInModal} from "./sign-in/SignInModal.tsx";
import {Container} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Profile} from "../../../ui/Pages/profile/profile";
// import {SignOutComponent} from "./SignOut";



export const TopNav = () => {
    const { profile } = Profile
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the user
    const isModalOpen = ()=> {
        if(!profile) {
            return !profile
        } else if(show && profile  ) {
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
                            <NavDropdown className="nav-link navbar-username" title={profile.profileHandle} >
                                <div className="dropdown-item">
                                    <Link to={`/profile/${profile?.profileId}`} className="btn btn-outline-dark">
                                        <FontAwesomeIcon icon="user" />&nbsp;&nbsp;My Profile
                                    </Link>
                                </div>
                                {/*<SignOutComponent />*/}
                            </NavDropdown>
                        </>
                    )}

                    {isModalOpen()  &&  (
                        <>
                            <SignUpModal/>
                            <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
};
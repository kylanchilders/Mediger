import React from "react";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import FrontDeskDiv from "../components/FrontDesk";
function FrontDesk() {
    return (
        <div>
        <Header />
       <FrontDeskDiv/>
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
    )
}

export default FrontDesk;
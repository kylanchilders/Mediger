import React from "react";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import FrontDeskDiv from "../components/FrontDesk";
function FrontDesk() {
    return (
        <div>
        <Header />
       <FrontDeskDiv/>
        <FooterDiv/>
        </div>
    )
}

export default FrontDesk;
import React from "react";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import ProfileDiv from "../components/AdminDiv";

function Admin() {
    return (
        <div>
        <Header />
        <ProfileDiv />
        <FooterDiv/>
        </div>
    )
}

export default Admin;
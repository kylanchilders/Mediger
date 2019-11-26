//Using desconstructor to import "Component" feature from react package
import React from "react";
import NavBar from "../components/Nav";
import MainDiv from "../components/CenterDiv";
import FooterDiv from "../components/Footer";

function Home() {
    return (
        <div>
        <NavBar />
        <MainDiv />
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
        
    )
}

export default Home;
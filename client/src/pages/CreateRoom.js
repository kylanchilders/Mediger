import React from "react";
import API from "../utils/API";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import CreateRoomDiv from "../components/CreateRoomDiv";

function CreateRoom() {
    return (
        <div>
        <Header />
        <CreateRoomDiv />
        <FooterDiv/>
        </div>
    )
}

export default CreateRoom;
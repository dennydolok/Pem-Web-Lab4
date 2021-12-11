import React, { Component } from "react";
import Navigations from "./module/templates/headers/Navigations";
import Chat from "./module/Chat";

export class Layout extends Component{
    render() {
        return (
            <div>
                <header>
                    <Navigations />
                </header>

                <main className="flex-shrink-0" style={{marginTop:"80px", paddingTop:"10px"}}>
                    <div className="container">
                        <Chat />
                    </div>
                </main>
            </div>
        );
    }
}

export default Layout;
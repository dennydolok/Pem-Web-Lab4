import React, { Component } from "react";
import Navigations from "./module/templates/headers/Navigations";

export class Layout extends Component{
    render() {
        return (
            <div>
                <header>
                    <Navigations />
                </header>

                <main className="flex-shrink-0" style={{marginTop:"80px", paddingTop:"10px"}}>
                    <div className="container">
                        <h5>Hello World</h5>
                    </div>
                </main>
            </div>
        );
    }
}

export default Layout;
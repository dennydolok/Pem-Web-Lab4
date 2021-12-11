import React, {useState} from 'react';
import NavItem from "./NavItem";

export function Navigations(){
    const [menu,setMenu] = useState([{"name":"Notifications","icon":"fa-globe","url":"/notifications","key":"1"},
                                    {"name":"Messages","icon":"fa-envelope-o","url":"/messages","key":"2"},
                                    {"name":"Profile","icon":"fa-user-o","url":"/profile","key":"3"},
                                    ]);
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor:"#7952b3"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">IBIK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <form className="d-flex w-100 px-5">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                        </div>
                    </form>
                    <NavItem data={menu} />
                </div>
            </div>

        </nav>
    )                                    
}
export default Navigations;
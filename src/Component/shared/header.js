import React from "react";
//import './header.css'
export default class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand me-5" href="#">Navbar</a>
                    <form class="d-flex ms-auto">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="input-group-text rounded-left" id="basic-addon2"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
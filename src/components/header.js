import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return(      
            <div id="header">

                    <div className="inner">
                        <header>
                            <h1><a href="index.html" id="logo">Helios</a></h1>
                            <hr />
                        </header>
                        <footer>
                            <a href="#banner" className="button circled scrolly">Start</a>
                        </footer>
                    </div>


                    <nav id="nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>
                                <a href="#">Dropdown</a>
                                <ul>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Magna phasellus</a></li>
                                    <li><a href="#">Etiam dolore nisl</a></li>
                                    <li>
                                        <a href="#">And a submenu &hellip;</a>
                                        <ul>
                                            <li><a href="#">Lorem ipsum dolor</a></li>
                                            <li><a href="#">Phasellus consequat</a></li>
                                            <li><a href="#">Magna phasellus</a></li>
                                            <li><a href="#">Etiam dolore nisl</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Veroeros feugiat</a></li>
                                </ul>
                            </li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                        </ul>
                    </nav>

            </div>
        );
    }
}
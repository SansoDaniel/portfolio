import {type JSX} from "react";
import "./navbar.css"

const Navbar = ():JSX.Element => {

    return <nav>
        <div className="nav-inner">
            <a href="#hero" className="nav-item active"><span className="nav-icon">🏠</span> Home</a>
            <a href="#skills" className="nav-item"><span className="nav-icon">◻</span> About</a>
            <a href="#projects" className="nav-item"><span className="nav-icon">📁</span> Progetti</a>
            {/*<a href="#certs" className="nav-item"><span className="nav-icon">&lt;/&gt;</span> Certificazioni</a>*/}
            <a href="#footer" className="nav-item"><span className="nav-icon">✉</span> Contatti</a>
        </div>
    </nav>
}

export default Navbar
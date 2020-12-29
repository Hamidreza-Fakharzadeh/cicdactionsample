import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function Nav() {
	return (
		<div className="cont-nav p--4">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to="cont-id" className="navbar-brand" smooth={true} duration={1500}>
						HF
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-itemd">
								<Link to="intro-id" className="nav-link active" aria-current="page" smooth={true} duration={1500}>
									Inro
								</Link>
							</li>
							<li className="nav-item">
								<Link to="about-id" className="nav-link" smooth={true} duration={1900}>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="tec-id" className="nav-link" smooth={true} duration={1500}>
                Technical Skills
								</Link>
							</li>
							<li className="nav-item">
								<Link id="soft-id" className="nav-link" Soft Skills >
                Soft Skills
								</Link>
							</li>
              <li className="nav-item">
								<Link id="soft-id" className="nav-link" Soft Skills >
                Education
								</Link>
							</li>
              <li className="nav-item">
								<Link id="soft-id" className="nav-link" Soft Skills >
                Experience
								</Link>
							</li>
              <li className="nav-item">
								<Link id="soft-id" className="nav-link" Soft Skills >
                Projects
								</Link>
							</li>
              <li className="nav-item">
								<Link id="soft-id" className="nav-link" Soft Skills >
                Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Nav;

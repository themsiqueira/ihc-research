import React from "react";
import albumPage from "./images/prototype-img-1.png";
import profilePage from "./images/prototype-img-2.png";
import recentsPage from "./images/prototype-img-3.png";
import mainPage from "./images/prototype-img-4.png";
import loginPage from "./images/prototype-img-5.png";
import signUpPage from "./images/prototype-img-6.png";

const Proptype = () => {
	return (
		<>
			<div
				style={{
					textAlign: "left",
					margin: "0 auto",
					paddingLeft: "1rem",
					paddingBottom: "2rem",
				}}
			>
				<p style={{ color: "black" }}>Prototipo de Alta fidelidade:</p>
				<a
					href="https://www.figma.com/file/oJ2Oj9qkPSaFrCWfKirv5i/Mobile-UI-kit-(Community)?type=design&node-id=0%3A1&mode=design&t=BSmAb0QFqE65oABj-1"
					target="_blank"
				>
					Link para o Figma
				</a>
			</div>
			<div style={{ minHeight: "100vh" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<img src={loginPage} alt="loginPage" height="500px" />;
					<img src={signUpPage} alt="signUpPage" height="500px" />;
					<img src={recentsPage} alt="recentsPage" height="500px" />;
				</div>
				<div
					style={{
						paddingTop: "1rem",
						paddingBottom: "1rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<img src={mainPage} alt="mainPage" height="500px" />;
					<img src={albumPage} alt="albumPage" height="500px" />;
					<img src={profilePage} alt="profilePage" height="500px" />;
				</div>
			</div>
		</>
	);
};
export { Proptype };

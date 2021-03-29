import React from "react";

function About(props) {
    return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-7 align-self-center">
					<div className="container text-center text-lg-left">
						<div className="row">
							<div className="col">
								<h3 className="mb-5">About</h3>
							</div>
						</div>
						<div className="row">
							<div className="col">
								I’m Haley Ellis, an illustrator working in Ann Arbor,
								Michigan.
								<br />
								<br />
								In 2017, I received my BFA from Western Michigan University.
								My work comes from a deeply embedded fascination with nature,
								and my childhood obsession with dinosaurs and all things
								make-believe. I pull much of my inspiration from the natural
								world and use it to inform the design of the creatures I
								create. When I’m not day-dreaming about dragons outside my
								window, I’m working to combine my proficiency in traditional
								media with my ever growing skills in Photoshop and Procreate.
							</div>
						</div>
					</div>
				</div>
				<div className="col align-self-center text-center order-first order-lg-last my-5">
					<img
						src={props.ART.other.aboutImage.image}
						className="img-fluid align-text-center about"
						alt="Haley Ellis Porfolio About Page"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col CREATUREPICSHERE"></div>
				<div className="col"></div>
				<div className="col CREATUREPICSHERE"></div>
			</div>
		</div>
	);
};

export default About;
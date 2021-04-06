import React from "react";

function Commissions(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<img
						src={props.ART.commissionImage.image}
						className="img-fluid align-text-center commissions"
						alt="Haley Ellis Porfolio About Page"
						width="80%"
					/>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col align-self-center text-center">
					<h3 className="mb-5">Commissions</h3>
                    <p>
                        In 2017, I received my BFA from Western Michigan University. My work comes from a deeply embedded fascination with nature, and my childhood obsession with dinosaurs and all things make-believe. I pull much of my inspiration from the natural
                        world and use it to inform the design of the creatures I create. When I’m not day-dreaming about dragons outside my window, I’m
                        working to combine my proficiency in traditional media with my ever growing skills in Photoshop and Procreate. 
                    </p>		
				</div>
			</div>
		</div>
	);
}

export default Commissions;

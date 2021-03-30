import React, { Component} from "react";
import { Modal, ModalHeader, ModalBody} from "reactstrap";

class CreaturesPortfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openedModal: null
		};
	}

	openModal = (piece) => {
		this.setState({ openedModal: piece });
	};
	closeModal = () => {
		this.setState({ openedModal: null });
	};

	render() {
		const pieces = this.props.ART.creaturesPortfolio.map((piece) => {
			return (
				<div className="col-12 col-md-6 mb-4" key={piece.title}>
					<div className="content" onClick={() => this.openModal(piece)}>
						<div class="content-overlay"></div>
						<img
							src={piece.image}
							draggable="false"
							alt={piece.alt}
							className="img-fluid content-image"
						/>
						<div class="content-details fadeIn-bottom">
							<h3 class="content-title">{piece.title}</h3>
						</div>
					</div>
					<Modal
						isOpen={this.state.openedModal === piece}
						toggle={this.closeModal}
						style={{ maxWidth: "700px", width: "95%" }}
					>
						<ModalHeader toggle={this.closeModal}>{piece.title}</ModalHeader>
						<ModalBody>
							{piece.body}
							<img
								src={piece.image}
								draggable="false"
								alt={piece.alt}
								className="img-fluid"
							/>
						</ModalBody>
					</Modal>
				</div>
			);
		});

		return (
			<React.Fragment>
				<div className="container-xl">
					<div className="row mt-5 align-items-center">{pieces}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CreaturesPortfolio;
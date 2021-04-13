import React from "react";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
	return {
		ART: state.ART,
	}
}

function HomePage(props) {
    return (
        <div className="container">
            <div className="row mt-3 my-lg-1">
                <div className="col">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={props.ART.homePictureBig.image} />
                        <img className="img-fluid" src={props.ART.homePictureSmall.image} alt="Haley Ellis Portfolio Home Page" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(HomePage))
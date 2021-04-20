import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

const mapStateToProps = (state) => {
	return {
		ART: state.ART,
	}
}

function HomePage(props) {
	return (
		<React.Fragment>
			<Helmet>
				<title>Haley Ellis Illustration</title>
				<meta name='description' content='' />
			</Helmet>
			<div className='container'>
				<div className='row mt-3 my-lg-1'>
					<div className='col'>
						<picture>
							<source media='(min-width: 900px)' srcSet={props.ART.homePictureBig.image} />
							<img className='img-fluid' src={props.ART.homePictureSmall.image} alt='Haley Ellis Illustration Portfolio Home Page' />
						</picture>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default withRouter(connect(mapStateToProps)(HomePage))

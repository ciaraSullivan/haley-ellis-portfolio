import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

const mapStateToProps = (state) => {
	return {
		ART: state.ART,
	}
}

function Commissions(props) {
	return (
		<React.Fragment>
			<Helmet>
				<title>Commissions | Haley Ellis Illustration</title>
				<meta
					name='description'
					content='I am open to commissions, whether you want a naturalist drawing of a favorite animal, a pet portrait, or a fantastical scene with any bizarre creature you desire.'
				/>
			</Helmet>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col text-center'>
						<img src={props.ART.commissionImage.image} className='img-fluid align-text-center commissions' alt='Haley Ellis Illustration Commissions Page d&d character creature nature art' width='80%' />
					</div>
				</div>
				<div className='row mt-3 justify-content-center'>
					<div className='col-12 col-md-8 align-self-center text-center'>
						<h3 className='mb-5'>Commissions</h3>
						<p>I am open to commissions, whether you want a naturalist drawing of a favorite animal, a pet portrait, or a fantastical scene with any bizarre creature you desire.</p>
						<p>I work in pen and ink, pencil, watercolor, or 2D digital media. The medium you chose will influence the price of the piece, as will size.</p>
						<p>
							If you would like to inquire about these services, feel free to send me an email through the <Link to='/contact'>contact page</Link>. I look forward to bringing your ideas
							to life!
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default withRouter(connect(mapStateToProps)(Commissions))

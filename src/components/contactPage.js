import React, { Component } from "react"
import { Button, Label } from "reactstrap"
import { Errors, Form, Control } from "react-redux-form"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { actions } from "react-redux-form"
import { Helmet } from "react-helmet"

/* eslint-disable react/jsx-pascal-case */

const mapStateToProps = (state) => {
	return {
		ART: state.ART,
	}
}

const mapDispatchToProps = {
	resetFeedbackForm: () => actions.reset("feedbackForm"),
}

const required = (val) => val && val.length
const maxLength = (len) => (val) => !val || val.length <= len
const minLength = (len) => (val) => val && val.length >= len
const isNumber = (val) => !isNaN(+val)
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			phoneNum: "",
			email: "",
			message: "",
			touched: {
				name: false,
				phoneNum: false,
				email: false,
				message: "",
			},
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(values) {
		console.log(JSON.stringify(values))

		this.sendFeedback({
			message: values.message,
			from_name: values.name,
			reply_to: values.email,
			their_phoneNum: values.phoneNum,
		})

		this.props.resetFeedbackForm()
	}

	sendFeedback(variables) {
		window.emailjs
			.send("service_88yf0ck", "template_h359qfp", variables)
			.then((res) => {
				console.log("Email successfully sent!")
			})
			// Handle errors here however you like, or use a React error boundary
			.catch((err) =>
				console.error(
					"Oh well, you failed. Here some thoughts on the error that occured:",
					err
				)
			)
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Contact | Haley Ellis Illustration</title>
					<meta
						name='description'
						content='Contact information and social media links for more examples of my work. Reach out with questions or commission requests.'
					/>
				</Helmet>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-8 col-lg-6'>
							<div className='container'>
								<div className='row justify-content-center align-items-end'>
									<div className='col col-lg-5 text-left'>
										<h3 className='mb-5'>Contact</h3>
										<div>
											<a
												href='https://www.instagram.com/hellisillustration/'
												target='_blank'
												rel='noreferrer'
											>
												<i className='fa fa-instagram fa-2x' />
											</a>
											<a
												href='https://www.linkedin.com/in/haley-jansson-18067a207/'
												className='px-3'
												target='_blank'
												rel='noreferrer'
											>
												<i className='fa fa-linkedin fa-2x' />
											</a>
											<a
												href='https://www.facebook.com/hellisillustration'
												target='_blank'
												rel='noreferrer'
											>
												<i className='fa fa-facebook fa-2x' />
											</a>
										</div>
									</div>
									<div className='col px-0'>
										<img
											src={this.props.ART.contactImage.image}
											className='img-fluid'
											alt={this.props.ART.contactImage.alt}
										/>
									</div>
									<div className='col-12 mt-2 text-left'>
										h.ellis.illustration@gmail.com
									</div>
								</div>
								<div className='row justify-content-center row-content mt-5'>
									<div className='col'>
										<Form
											model='feedbackForm'
											className='container text-left'
											onSubmit={(values) => this.handleSubmit(values)}
										>
											<div className='row form-group'>
												<Label className='col-12 col-md-2' htmlFor='name'>
													Name
												</Label>
												<div className='col'>
													<Control
														type='text'
														model='.name'
														className='form-control'
														id='name'
														name='name'
														validators={{
															required,
															minLength: minLength(2),
															maxLength: maxLength(20),
														}}
													/>
													<Errors
														className='text-danger'
														model='.name'
														show='touched'
														component='div'
														messages={{
															required: "Required",
															minLength:
																"Must enter at least 2 characters.",
															maxLength:
																"Must enter 20 characters or less",
														}}
													/>
												</div>
											</div>
											<div className='row form-group'>
												<Label
													className='col-12 col-md-2'
													htmlFor='phoneNum'
												>
													Phone
												</Label>
												<div className='col'>
													<Control
														type='text'
														model='.phoneNum'
														id='phoneNum'
														className='form-control'
														name='phoneNum'
														validators={{
															required,
															minLength: minLength(10),
															maxLength: maxLength(15),
															isNumber,
														}}
													/>
													<Errors
														className='text-danger'
														model='.phoneNum'
														show='touched'
														component='div'
														messages={{
															required: "Required",
															minLength:
																"Must enter at least 10 numbers.",
															maxLength:
																"Must enter 15 numbers or less",
															isNumber: "Must be a number.",
														}}
													/>
												</div>
											</div>
											<div className='row form-group'>
												<Label className='col-12 col-md-2' htmlFor='email'>
													Email
												</Label>
												<div className='col'>
													<Control
														type='text'
														model='.email'
														className='form-control'
														id='email'
														name='email'
														validators={{
															required,
															validEmail,
														}}
													/>
													<Errors
														className='text-danger'
														model='.email'
														show='touched'
														component='div'
														messages={{
															required: "Required",
															validEmail: "Invalid email address.",
														}}
													/>
												</div>
											</div>
											<div className='row form-group'>
												<Label
													className='col-12 col-md-2'
													htmlFor='message'
												>
													Message
												</Label>
												<div className='col'>
													<Control.textarea
														id='message'
														name='message'
														rows='4'
														model='.message'
														className='form-control'
													/>
												</div>
											</div>
											<div className='row form-group'>
												<div className='col text-center offset-md-2'>
													<Button
														type='submit'
														color='secondary'
														style={{ width: "50%" }}
													>
														Send
													</Button>
												</div>
											</div>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact))

import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/configureStore"
import Main from "./components/main"

const store = ConfigureStore()

document.oncontextmenu = function (e) {
	if (e.button === 2) {
		e.preventDefault()
		return false
	}
}

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className='App'>
					<Main />
				</div>
			</BrowserRouter>
		</Provider>
	)
}

export default App

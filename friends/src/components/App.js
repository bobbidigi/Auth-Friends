import "./App.css"
import React from "react"
import {Link, Route} from 'react-router-dom'
import {getToken} from '../utils/api'
import ProtectedRoute from './ProtectedRoute'
import Signin from './Signin'
import Account from './Account'
import Logout from './Logout'
import Add from './Add'
import FriendDetails from './FriendDetails'
import Edit from './Edit'

function App() {

	const signedIn = getToken()

	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				{!signedIn && <Link to="/signin">Sign In</Link>}
				{signedIn && <Link to="/account">My Account</Link>}
				{signedIn && <Link to="/logout">Log Out</Link>}

			</nav>
			<Route exact path='/signin' component={Signin}/>
			<ProtectedRoute exact path='/account' component={Account}/>
			<ProtectedRoute exact path='/logout' component={Logout}/>
			<ProtectedRoute exact path='/add' component={Add}/>
			<ProtectedRoute exact path='/edit/:id' component={Edit}/>
			<ProtectedRoute exact path='/friend/:id' component={FriendDetails}/>
		</div>
	)
}

export default App

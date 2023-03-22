import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
	return (
		<div>
			
			{ children }
			<Header />
			
		</div>
	)
}

export default Layout
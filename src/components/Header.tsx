import React from "react"
import styled from "styled-components"

const Header = () => {
	return (
		<Styles>
			<div>I am the Header</div>
		</Styles>
	)
}

export default Header

const Styles = styled.div`
	.container {
		color: red;
	}
`

import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="logo">hungry</div>
			<nav>
				<a href="action.js">About</a>
				<a href="#">about us</a>
				<a href="#">the menu</a>
				<a href="#">our team</a>
				<a href="#">the gallery</a>
				<a href="#">pages</a>
				<a href="#">resercation</a>
			</nav>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

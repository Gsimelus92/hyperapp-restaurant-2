import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<section class="footer">
			<div class="footer-image1"></div>
			<div class="footer-image2"></div>
			<div class="footer-image3"></div>
			<div class="footer-wrapper">
				<div class="row-1">
					<h1>CONTACT US</h1>
					<p>
						is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard
					</p>
				</div>

				<div class="row-2">
					<h1>NEW ON THE MENU</h1>
					<h3>ANGUS STEAK BURGER</h3>
					<p>Aenean commodo ligula eget.</p>

					<h3>ANGUS STEAK BURGER</h3>
					<p>Aenean commodo ligula eget.</p>

					<h3>ANGUS STEAK BURGER</h3>
					<p>Aenean commodo ligula eget.</p>
				</div>
				<div class="row-3">
					<h1>Opening times</h1>
					<h3>
						monday <strong>11am to 11pm</strong>
					</h3>
					<h3>
						tuesday <strong>11am to 11pm</strong>
					</h3>
					<h3>
						wendsday <strong>11am to 11pm</strong>
					</h3>
					<h3>
						thrusaday <strong>11am to 11pm</strong>
					</h3>
					<h3>
						friday <strong>11am to 12pm</strong>
					</h3>
					<h3>
						saturday <strong>11am to 12pm</strong>
					</h3>
					<h3>
						sunday <strong>closed</strong>
					</h3>
				</div>
			</div>
			<div class="bottom-logo">
				<h1>
					hungry<strong>| established in 2019</strong>
				</h1>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

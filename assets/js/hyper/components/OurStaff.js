import { h, app } from 'hyperapp';

export default function OurStaff({ state, actions }) {
	return (
		<section class="our-staff">
			<div class="staff-title">
				<h1>our staff</h1>
				<h2>the friendliest people</h2>
			</div>
			<div class="chife-img">
				<div class="wrapper-two">
					<div class="img-1"></div>
					<div class="img-2"></div>
					<div class="img-3"></div>
				</div>

				<div class="wrapper-three">
					<div class="img-1-info">
						<h3>John Doggett</h3>
						<h5>Head chef</h5>
						<p>
							s simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galle
						</p>
					</div>

					<div class="img-2-info">
						<h3>JEFFREY SPENDER</h3>
						<h5>Head Barman</h5>
						<p>
							s simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galle
						</p>
					</div>

					<div class="img-3-info">
						<h3>MONICA REYES</h3>
						<h5>Waitress</h5>
						<p>
							s simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galle
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

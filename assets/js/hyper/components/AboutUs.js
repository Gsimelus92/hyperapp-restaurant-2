import { h, app } from 'hyperapp';

export default function AboutUs({ state, actions }) {
	return (
		<section class="about">
			<div class="title">
				<h1>About us</h1>
				<h3>Whats our story?</h3>
			</div>

			<div class="conatiner">
				<div class="conatiner-T">
					<div class="wrapper">
						<div class="round-img"></div>
						<div class="info-right">
							<h1>It started, quite simply, like this...</h1>
							<h2>
								is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book
							</h2>

							<p>
								is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book
							</p>
							<button class="btn1">Learn More</button>
							<button class="btn2">see the menu</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

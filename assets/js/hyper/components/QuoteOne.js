import { h, app } from 'hyperapp';

export default function QuoteOne({ state, actions }) {
	return (
		<section id="quote">
			<div class="background-img-q">
				<div class="layer">
					<div class="conatiner">
						<div class="quote-title">
							<h1>
								I cook with wine <br />
							</h1>
							<h2>
								sometimes i even <strong>add</strong> it to the food!
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

import { h, app } from 'hyperapp';

export default function Review({ state, actions }) {
	return (
		<section class="review">
			<div class="background-img-review">
				<div class="toplayer">
					<div class="conatiner">
						<h1>WHat our customer say...</h1>
						<div class="wrapper">
							<div class="left-review">
								<div class="l-b-1">
									<p>
										"I strongly urge you to try the chef's
										<br /> Special, you'll love it!"
									</p>

									<h2>
										christina from <strong>stockton,cleveland</strong>
									</h2>
								</div>
								<div class="l-b-2">
									<p>"The Enterainment was Top Notch!"</p>
									<div class="l2image"></div>
									<h2>
										Leonard from <strong>phoenix,arizona</strong>
									</h2>
								</div>
							</div>

							<div class="right-review">
								<div class="r-b-1">
									<p>
										"Greater Food. Great Staff.
										<br /> Great Service. Good times!"
									</p>
									<div class="r1image"></div>
									<h2>
										John from <strong>red falls, colorado</strong>
									</h2>
								</div>
								<div class="r-b-2">
									<p>
										"Excellent food.
										<br /> Highly Recommened!"
									</p>
									<div class="r2image"></div>
									<h2>
										Theresa from <strong>Bellflower,Oregon</strong>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

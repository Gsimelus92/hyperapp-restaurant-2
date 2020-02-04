import { h, app } from 'hyperapp';

export default function Reservation({ state, actions }) {
	return (
		<section class="reservation">
			<div class="reser-title">
				<h1>Reservation</h1>
				<h2>book tour meal today</h2>
			</div>
			<div class="booking-title">
				<h1>Booking form</h1>
				<p>
					please fill out all required<strong>*</strong>fields. thanks!
				</p>
			</div>
			<div class="conatiner">
				<div class="reser-wrapper">
					<form class="form-left">
						<p>
							NAME OF YOUR PARTY<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>

						<p>
							YOUR EMAIL ADDRESS<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>

						<p>
							YOUR CONTACT NUMBER<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>

						<p>
							HOW MANY PEOPLE IN YOUR PARTY?<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>
					</form>
					<form class="form-right">
						<p>
							DATE OF BOOKING<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>

						<p>
							TIME OF BOOKING<strong>*</strong>
						</p>
						<input type="text" name="firstname"></input>

						<div class="text-box">
							<p>
								OPTIONAL MESSAGE<strong>*</strong>
							</p>
							<input type="text" name="firstname"></input>
						</div>
					</form>
				</div>
				<button type="button" class="table-btn">
					Find me a Table!
				</button>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

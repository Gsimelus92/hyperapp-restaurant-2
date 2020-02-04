import { h, app } from 'hyperapp';

export default function Menu({ state, actions }) {
	return (
		<section class="menu">
			<div class="small-imageL1"></div>
			<div class="title">
				<h1>Our menu</h1>
				<p>felling peckish?</p>
			</div>
			<div class="conatiner">
				<div class="wrapper">
					<div class="left-food">
						<h2>Starters</h2>
						<div class="l-f-1">
							<h3>
								Garlic bread..................................
								<strong>$3.00</strong>
							</h3>
						</div>

						<div class="l-f-2">
							<h3>
								Mixed Salad...................................
								<strong>$7.00</strong>
							</h3>
							<div class="small-imageL2"></div>
						</div>

						<div class="l-f-3">
							<h3>
								BBQ Chicken Wings.....................<strong>$7.00</strong>
							</h3>
							<div class="small-imageL3"></div>
						</div>

						<h4>Deserts</h4>
						<div class="l-f-4">
							<h3>
								Chocolate Fudgecake.....................<strong>$8.50</strong>
							</h3>
							<div class="small-imageL4"></div>
						</div>
						<div class="l-f-5">
							<h3>
								Chesse Cake....................................
								<strong>$4.25</strong>
							</h3>
							<div class="small-imageL5"></div>
						</div>
					</div>

					<div class="right-food">
						<h2>Main dishes</h2>

						<div class="r-f-1">
							<h3>
								Meat Feast Pizza....................<strong>$17:00</strong>
							</h3>
							<div class="small-imageR1"></div>
						</div>
						<div class="r-f-2">
							<h3>
								Lasagna................................
								<strong>$16:00</strong>
							</h3>
							<div class="small-imageR2"></div>
						</div>
						<div class="r-f-3">
							<h3>
								Specy Meatballs....................<strong>$14:00</strong>
							</h3>
							<div class="small-imageR3"></div>
						</div>
						<h5>Drinks</h5>
						<div class="r-f-4">
							<h3>
								Premium Beer.........................<strong>$5.00</strong>
							</h3>

							<div class="small-imageR4"></div>
						</div>
						<div class="r-f-5">
							<h3>
								Sparkling White Wine.............<strong>$6.00</strong>
							</h3>
							<div class="small-imageR5"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

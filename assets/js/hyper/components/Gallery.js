import { h, app } from 'hyperapp';

export default function Gallery({ state, actions }) {
	return (
		<section id="gallery">
			<div class="title">
				<h1>The Gallery</h1>
				<p>take a look inside</p>
			</div>
			<div class="conatiner2">
				<div class="gallery-wrapper">
					<div class="g-w-1">
						<img class="g-w-1img"></img>
					</div>
					<div class="g-w-2">
						<img class="g-w-2img"></img>
					</div>
					<div class="g-w-3">
						<img class="g-w-3img"></img>
					</div>
					<div class="g-w-4">
						<img class="g-w-4img"></img>
					</div>
					<div class="g-w-5">
						<img class="g-w-5img"></img>
					</div>
					<div class="g-w-6">
						<img class="g-w-6img"></img>
					</div>
					<div class="g-w-7">
						<img class="g-w-7img"></img>
					</div>
					<div class="g-w-8">
						<img class="g-w-8img"></img>
					</div>
					<div class="g-w-9">
						<img class="g-w-9img"></img>
					</div>
					<div class="g-w-10">
						<img class="g-w-10img"></img>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

import { h, app } from 'hyperapp';
import Header from './Header.js';
import TopImg from './TopImg.js';
import AboutUs from './AboutUs.js';
//import Review from './Review.js';
import Menu from './Menu.js';
import QuoteOne from './QuoteOne.js';
import OurStaff from './OurStaff.js';
import QuoteTwo from './QuoteTwo.js';
import Gallery from './Gallery.js';
import QuoteThree from './QuoteThree.js';
import Reservation from './Reservation.js';
import Footer from './Footer.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<TopImg state={state} actions={actions} />
			<AboutUs state={state} actions={actions} />

			<Menu state={state} actions={actions} />
			<QuoteOne state={state} actions={actions} />
			<OurStaff state={state} actions={actions} />
			<QuoteTwo state={state} actions={actions} />
			<Gallery state={state} actions={actions} />
			<QuoteThree state={state} actions={actions} />
			<Reservation state={state} actions={actions} />
			<Footer state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

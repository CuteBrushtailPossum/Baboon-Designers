import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Showcase from './components/Showcase';
import Services from './components/Service';
import Workers from './components/Workers';
import Packages from './components/Packages';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
<div>
	<Menu/>
	<div class="main">
		<h1>BABOON DESIGN</h1>
		<Showcase/>
		<Services/>
		<Workers/>
		<Packages/>
		<Contacts/>
	</div>
	<Footer/>
  </div>
  );
}
export default App
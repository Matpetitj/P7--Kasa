import accomodations from "../../assets/Datas/logements.json";
import bannerImg from "../../assets/Images/background-banner.png";
import './Home.css';
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import {Link} from "react-router-dom";

export default function Home() {
	return (
		<>
			<Banner img={bannerImg} text="Chez vous, partout et ailleurs"/>
			<div className="cards_accomodation_container">
				{accomodations.map((appart, id) => (
					<div className="card_accomodation" key={id}>
						<Link className="card_accomodation_link" to={`/accomodation/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} alt={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

//importer le json
//remplacer data par la variable
//{title}
//rajouter le alt directement dans l16
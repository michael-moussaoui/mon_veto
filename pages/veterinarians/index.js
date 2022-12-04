import axios from "axios";
import { Layout } from "components/Layout";
import { VeterinarianCard } from "components/ProductCard";

function VeteririansPage({ veteririans = [] }) {
	const renderVeterinarians = () => {
		if (veteririans.length === 0) return <h1>No veteririans</h1>;
		return veteririans.map((veteririan) => (
			<VeterinarianCard key={veteririan.id} veteririan={veteririan} />
		));
	};

	return (
		<Layout>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
				{renderVeterinarians()}
			</div>
		</Layout>
	);
}

export default VeteririansPage;

export const getServerSideProps = async () => {
	const { data: veteririans } = await axios.get(
		"http://localhost:3001/api/veteririans"
	);

	return {
		props: {
			veteririans,
		},
	};
};

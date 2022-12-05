import axios from "axios";
import Image from "next/image";
// import { Layout } from "components/Layout";
// import { VeterinarianCard } from "components/ProductCard";

function VeterinariansPage({ veterinarians = [] }) {
	// const renderVeterinarians = () => {
	// 	if (veterinarians.length === 0) return <h1>No veterinarians</h1>;
	// 	return veterinarians.map((veterinarian) => (
	// 		<VeterinarianCard
	// 			key={veterinarian.id}
	// 			veteririan={veterinarian}
	// 		/>
	// 	));
	// };

	return (
		<div className=" bg-mainColor h-screen">
			<header>
				<Image
					src={"/LogoVeto.png"}
					alt="logo"
					width={150}
					height={150}
				></Image>
			</header>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
				{/* {renderVeterinarians()} */}
			</div>
		</div>
	);
}

export default VeterinariansPage;

// export const getServerSideProps = async () => {
// 	const { data: veterinarians } = await axios.get(
// 		"http://localhost:3001/api/veteririans"
// 	);

// 	return {
// 		props: {
// 			veterinarians,
// 		},
// 	};
// };

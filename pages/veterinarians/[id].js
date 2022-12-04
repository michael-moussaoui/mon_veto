import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Layout } from "components/Layout";

function VeterinarianPage({ veterinarian }) {
	const router = useRouter();

	const handleDelete = async (id) => {
		try {
			await axios.delete("/api/veterinarians/" + id);
			toast.success("Task deleted");
			router.push("/");
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	return (
		<Layout>
			<div className="p-6 bg-white dark:bg-gray-800">
				<p>Name: {veterinarian.name}</p>
				<p>Pseudo: {veterinarian.pseudo}</p>
				<p>Password: {veterinarian.password}</p>
			</div>

			<div className="mt-7 flex justify-center">
				<button
					className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
					onClick={() => handleDelete(veterinarian.id)}
				>
					delete
				</button>
				<button
					className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
					onClick={() =>
						router.push("/Veterinarians/edit/" + veterinarian.id)
					}
				>
					Edit
				</button>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async ({ query }) => {
	const { data: veterinarian } = await axios.get(
		"http://localhost:3000/api/veterinarians/" + query.id
	);

	console.log(veterinarian);

	return {
		props: {
			veterinarian,
		},
	};
};

export default VeterinarianPage;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import handler from "../api/owner";
import { saveOwner } from "../../controller/owner/owner";

function Register() {
	//STATE
	const [registerOwnerName, setRegisterOwnerName] = useState("");
	const [registerOwnerPseudo, setRegisterOwnerPseudo] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerOwnerEmail, setRegisterOwnerEmail] = useState("");

	console.log(registerOwnerName);

	const register = () => {
		axios({
			method: "post",
			data: {
				name: registerOwnerName,
				pseudo: registerOwnerPseudo,
				password: registerPassword,
				emailAdress: registerOwnerEmail,
			},
			// widthCrendatials: true,
			url: "http://localhost:3001/owners/register",
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className="h-screen relative overflow-x-hidden bg-mainColor font-basker">
			<header>
				<Link href="/">
					<Image
						src={"/LogoVeto.png"}
						alt="logo"
						width={150}
						height={150}
					></Image>
				</Link>
			</header>

			<div className="w-[30vw] h-[75vh] mx-auto  bg-white rounded-md">
				<h1 className=" text-mainColor text-center text-4xl pt-10 mb-5">
					Inscription
				</h1>
				<div className="h-screen w-[30vw] absolute right-0 bottom-0 border-l-2 border-l-secondColor">
					<Image
						src={"/images/dogRegister.jpg"}
						objectif="cover"
						alt="un chien avec un bonnet"
					></Image>
				</div>
				<form className="relative">
					<label
						htmlFor="name"
						className="relative left-12 text-2xl text-mainColor"
					>
						Nom
					</label>
					<input
						className="block w-[80%] h-[5vh] mx-auto mb-5 bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="name"
						type="text"
						name="name"
						placeholder="Veuillez saisir votre nom"
						onChange={(e) => setRegisterOwnerName(e.target.value)}
					></input>
					<label
						htmlFor="pseudo"
						className="relative left-12 text-xl text-mainColor"
					>
						Pseudo
					</label>
					<input
						className="block w-[80%] h-[5vh] mx-auto mb-5 bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="pseudo"
						type="text"
						name="pseudo"
						placeholder="Choisissez un pseudo"
						onChange={(e) => setRegisterOwnerPseudo(e.target.value)}
					></input>
					<label
						htmlFor="password"
						className="relative text-xl left-12 text-mainColor"
					>
						Mot de passe
					</label>
					<input
						className="block w-[80%] h-[5vh] mb-5 mx-auto bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="password"
						type="password"
						name="password"
						placeholder="Choisissez un mot de passe"
						onChange={(e) => setRegisterPassword(e.target.value)}
					></input>
					<label
						htmlFor="email"
						className="relative left-12 text-xl text-mainColor"
					>
						Email
					</label>
					<input
						className="block w-[80%] h-[5vh] mx-auto mb-5 bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="email"
						type="email"
						name="email"
						placeholder="Veuillez saisir votre email"
						onChange={(e) => setRegisterOwnerEmail(e.target.value)}
					></input>

					<button
						onClick={register}
						className=" block w-[80%] h-[7vh] bg-mainColor mx-auto text-center text-3xl rounded-md mt-10 text-white"
					>
						Valider
					</button>
					<div className="flex justify-center">
						<span className="text-mainColor">Déja un compte ?</span>
						<Link href="/owners/login">
							<span className=" text-secondColor">
								Connectez-vous ici.
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;

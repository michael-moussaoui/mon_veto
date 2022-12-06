import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Register() {
	//STATE
	const [registerOwnerPseudo, setRegisterOwnerPseudo] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

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
				<h1 className=" text-mainColor text-center text-4xl pt-10 mb-10">
					Inscription
				</h1>
				<div className="h-screen w-[30vw] absolute right-0 bottom-0 border-l-2 border-l-secondColor">
					<Image
						src={"/images/dogRegister.jpg"}
						fill
						alt="un chien avec un bonnet"
					></Image>
				</div>
				<form className="relative">
					<label className="relative left-12 text-2xl text-mainColor">
						Pseudo
					</label>
					<input
						className="block w-[80%] h-[7vh] mx-auto mb-5 bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="pseudo"
						type="text"
						name="pseudo"
						placeholder="Choisissez un pseudo"
						onChange={(e) => setRegisterOwnerPseudo(e.target.value)}
					></input>
					<label className="relative text-2xl left-12 text-mainColor">
						Mot de passe
					</label>
					<input
						className="block w-[80%] h-[7vh] mx-auto bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="password"
						type="password"
						name="password"
						placeholder="Choisissez un mot de passe"
						onChange={(e) => setRegisterPassword(e.target.value)}
					></input>

					<button className=" block w-[80%] h-[7vh] bg-mainColor mx-auto text-center text-3xl rounded-md mt-10 text-white">
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

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Login() {
	//STATE
	const [loginOwnerPseudo, setLoginOwnerPseudo] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

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

			<div className="w-[30vw] h-[70vh] mx-auto top-48 bg-white rounded-md">
				<h1 className=" text-mainColor text-center text-4xl pt-10 mb-10">
					Connexion
				</h1>
				<div className="h-screen w-[30vw] absolute right-0 bottom-0 border-l-2 border-l-secondColor">
					<Image
						src={"/images/dogLogin.jpg"}
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
						onChange={(e) => setLoginOwnerPseudo(e.target.value)}
					></input>
					<label className="relative text-2xl left-12 text-mainColor">
						Mot de passe
					</label>
					<input
						className="block w-[80%] h-[7vh] mx-auto mb-20 bg-mainColor opacity-30 rounded-md placeholder:text-[#000] placeholder:pl-3"
						id="password"
						type="password"
						name="password"
						placeholder="Choisissez un mot de passe"
						onChange={(e) => setLoginPassword(e.target.value)}
					></input>

					<button className=" block w-[80%] h-[7vh] bg-mainColor mx-auto text-center text-3xl rounded-md mt-10 text-white">
						Valider
					</button>
					<div className="flex flex-col text-center">
						<p className="text-mainColor mt-2">
							Vous n&apos;avez pas encore un compte ?
						</p>
						<Link href="/owners/register">
							<p className=" text-secondColor">Inscrivez-vous ici.</p>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

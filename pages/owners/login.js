import react from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Buttons/Button";
// import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
	//STATE
	// const { data: session } = useSession();

	// if (session) {
	// 	return (
	// 		<div>
	// 			{/* <p>Bonjour, {session.user.email}</p> */}
	// 			{/* <button onClick={() => signOut()}>Se déconnecter</button> */}
	// 		</div>
	// 	);
	// }
	// else {
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
				<div className="relative left-48 -top-20 mr-10">
					<Link href="/" passHref>
						<Button version="primary">Accueil</Button>
					</Link>
				</div>
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
				<form method="POST" className="relative">
					<label
						htmlFor="pseudo"
						className="relative left-12 text-2xl text-mainColor"
					>
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
					<label
						htmlFor="password"
						className="relative text-2xl left-12 text-mainColor"
					>
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

					<button
						onClick={login}
						className=" block w-[80%] h-[7vh] bg-mainColor mx-auto text-center text-3xl rounded-md mt-10 text-white"
					>
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

					<div>
						<p className=" text-secondColor">
							vous n&apos;êtes pas connecté(e).
						</p>
						<button onClick={() => signIn()}>Connexion</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

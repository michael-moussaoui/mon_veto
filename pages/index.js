import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/Buttons/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
	//STATE

	return (
		<div className="h-screen relative overflow-x-hidden bg-mainColor font-basker">
			<Head>
				<title>Mon véto</title>
				<meta
					name="description"
					content="Application carnet de santé pour animal"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Image
					src={"/LogoVeto.png"}
					alt="logo"
					width={150}
					height={150}
				></Image>
				<div className="absolute right-0 top-10 mr-10">
					<Link href="/owners/register" passHref>
						<Button version="primary">Inscription</Button>
					</Link>
					<Link href="/owners/login" passHref>
						<Button version="primary">Connexion</Button>
					</Link>
					<Link href="/veterinarian/login">
						<span className=" text-secondColor font-bold text-[1.5rem]">
							Espace vétérinaire
						</span>
					</Link>
				</div>
			</header>

			<main className="">
				<h1 className="relative w-[25vw] text-6xl left-[35%] text-white">
					Le carnet de santé de votre animal
				</h1>
				<div>
					<p className="relative  left-10 w-[30vw] top-24 text-xl backdrop-blur-sm bg-white/20 rounded-[15px]  py-10 px-5">
						Consignez maladies, soins, poids, taille dans son carnet
						de santé... Plus de problème de perte du carnet de santé
						ou d’oubli du rappel du vaccin... Vous recevez un message
						par mail pour le rappel du vaccin.
					</p>
				</div>

				<div className="absolute right-0 bottom-0 ">
					<Image
						src={"/images/dogHome.jpg"}
						alt="photo d'un chien avec un pull"
						width={500}
						height={400}
					></Image>
				</div>
			</main>
		</div>
	);
}

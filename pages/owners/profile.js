import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../components/Buttons/Button";

function Profile() {
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
				<div className="absolute right-0 top-10 mr-10">
					<Link href="" passHref>
						<Button version="primary">Vaccins</Button>
					</Link>

					<Link href="" passHref>
						<Button version="primary">Mes visites</Button>
					</Link>
				</div>
			</header>
			<div className="w-[10rem] h-[3rem] bg-secondColor flex items-center mt-24 ml-5 pl-3 rounded-md">
				Nom:
			</div>
			<div className="ml-5 mt-16 text-lg">
				<p>Espece:</p>
				<p>Sexe:</p>
				<p>Date de naissance:</p>
				<p>N° de puce électronique:</p>
				<p className="mt-10">Vétérinaire :</p>
			</div>
		</div>
	);
}

export default Profile;

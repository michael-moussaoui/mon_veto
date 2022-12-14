import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Buttons/Button";

function Veterinarian() {
	return (
		<div className="h-screen relative overflow-x-hidden bg-mainColor font-basker">
			<header className=" w-screen h-[17vh] bg-secondColor border-b-2 border-b-[#000]">
				<Link href="/">
					<Image
						src={"/LogoVeto.png"}
						alt="logo"
						width={150}
						height={150}
					></Image>
				</Link>
				<div className="absolute right-0 top-10 mr-10">
					<Link href="/veterinarian/registerAnimal" passHref>
						<Button version="primary">Enregister un animal</Button>
					</Link>
				</div>
			</header>
			<h1 className="text-center text-3xl mt-5">Tableau de bord</h1>
		</div>
	);
}

export default Veterinarian;

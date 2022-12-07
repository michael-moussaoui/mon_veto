// import { executeQuery } from "../config/database";

const express = require("express");
const boddParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// const db = require("./db");
const db = require("../config/database");

const app = express();

app.use(boddParser.json());
app.use(boddParser.urlencoded({ extended: true }));
app.use(
	expressSession({
		secret: "mySecretKey",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(
	cors({
		origin: "http://localhost:3001",
		credentials: true,
	})
);
app.use(cookieParser("mySecretKey"));

app.use(passport.initialize());
app.use(passport.session());
// require("./passportConfig");

app.get("/", (req, res) => {
	res.send("hello world");
});

app.post("/owners/register", (req, res) => {
	const name = req.body.name;
	const pseudo = req.body.pseudo;
	const password = req.body.password;
	const emailAdress = req.body.emailAdress;

	const query =
		"INSERT INTO owner (`name`, `pseudo`, `password`, `emailAdress`) VALUES (?,?,?,?)";
	const query2 = "SELECT * FROM owner WHERE name = ?";

	db.query(query2, [pseudo], (err, result) => {
		if (err) {
			throw err;
		}
		if (result.length > 0) {
			res.send({ message: "Le pseudo existe déjà" });
		}
		if (result === 0) {
			const hashedPassword = bcrypt.hashSync(password, 10);
			db.query(
				query,
				[name, pseudo, password, emailAdress],
				(err, result) => {
					if (err) {
						throw err;
					}
					res.send({ message: "propriétaire créé" });
				}
			);
		}
	});
});

// app.post("/owners/login", (req, res, next) => {
// 	passport.authenticate("local", (err, user, info) => {
// 		if (err) {
// 			throw err;
// 		}
// 		if (user) {
// 			res.send("l'utilisateur n'existe pas");
// 			console.log(req.user);
// 		}
// 		if (user) {
// 			req.login(user, (err) => {
// 				if (err) {
// 					throw err;
// 				}
// 				res.send("L'utilisateur est connecté");
// 			});
// 		}
// 	})(req, res, next);
// });

// app.get("/", (req, res) => {
// 	res.send("server started on port 3002");
// });

app.listen(3002, () => {
	console.log("server started on port 3002");
});

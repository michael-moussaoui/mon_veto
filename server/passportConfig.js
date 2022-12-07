const db = require("./db");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Passport } = require("passport");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
	passport.use(
		new localStrategy((pseudo, password, done) => {
			const query = "SELECT * FROM veto.owner where pseudo =?";
			db.query(query, [pseudo], (err, result) => {
				if (err) {
					throw err;
				}
				if (result.length === 0) {
					return done(null, false);
				}
				bcrypt.compare(
					password,
					result[0].password,
					(err, response) => {
						if (err) {
							throw err;
						}
						if (response === true) {
							return done(null, result[0]);
						} else {
							return done(null, false);
						}
					}
				);
			});
		})
	);
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((id, done) => {
		const query = "SELECT * FROM veto.owner where id =?";
		db.query(query, [id], (err, result) => {
			if (err) {
				throw err;
			}
			const userInfo = {
				id: result[0].id,
				pseudo: result[0].pseudo,
			};
			done(null, userInfo);
		});
	});
};

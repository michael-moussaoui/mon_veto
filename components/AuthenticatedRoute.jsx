import react, { useContext } from "react";

const AuthenticatedRoute = ({ path, component }) => {
	const { isAuthenticated } = useContext(Auth);
};

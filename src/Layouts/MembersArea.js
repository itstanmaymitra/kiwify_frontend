import { Outlet } from "react-router-dom";
import MembersAreaNav from "../Components/MembersAreaNav";

const MembersArea = () => {
	return (
		<>
			<MembersAreaNav />
			<Outlet></Outlet>
		</>
	);
};

export default MembersArea;

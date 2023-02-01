import { createBrowserRouter } from "react-router-dom";
import MembersArea from "../Layouts/MembersArea";
import CourseContent from "../Pages/CourseContent";
import Error404 from "../Pages/Error404";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MembersArea />,
		children: [
			{
				path: "/",
				element: <CourseContent />,
			},
		],
	},
	{
		path: "*",
		element: <Error404 />,
	},
]);

export default router;

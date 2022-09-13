import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "@mantine/core";

export default function Dashboard() {
	let { user, isAuthenticated, isLoading } = useAuth0();
	return (
		<h1>
			{user ? (
				`Hello, ${user.name}`
			) : isLoading ? (
				<Skeleton />
			) : (
				`Dashboard`
			)}
		</h1>
	);
}

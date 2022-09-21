import {
	AppShell,
	Header,
	Navbar,
	Group,
	Avatar,
	Text,
	Stack,
} from "@mantine/core";
import { IconBeer, IconLayoutDashboard, IconTicket } from "@tabler/icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Dashboard, NavbarSimple, Orders } from "./containers";

const data = [
	{
		element: Dashboard,
		label: "Dashboard",
		icon: IconLayoutDashboard,
	},
	{
		element: Orders,
		label: "Orders",
		icon: IconTicket,
	},
];

function App() {
	let [active, setActive] = useState(0);

	return (
		<AppShell
			padding="md"
			header={
				<Header height={60} p="xs">
					<Group pl={8}>
						<Avatar color="orange" alt="Drunk Bartender logo">
							<IconBeer />
						</Avatar>
						<Text weight={500} size="xl">
							Drunk Bartender
						</Text>
					</Group>
				</Header>
			}
			navbar={
				<Navbar
					width={{
						base: 300,
					}}
				>
					<Stack justify="center" align="center" mt={50}>
						<NavbarSimple
							activeChange={(label: string) => {
								setActive(
									data.findIndex(
										(item) => item.label == label
									)
								);
								console.log(
									data.findIndex(
										(item) => item.label == label
									)
								);
							}}
							data={data}
						/>
					</Stack>
				</Navbar>
			}
			styles={(theme) => ({
				root: {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					color: theme.colorScheme === "dark" ? "white" : "black",
					fontFamily: "sans-serif",
				},
			})}
		>
			<AnimatePresence>
				{wrapper(data[active].element, {})}
			</AnimatePresence>
		</AppShell>
	);
}

function wrapper(WrappedElement: any, props: any) {
	return (
		<motion.div
			key={WrappedElement.name}
			exit={{ opacity: 0, translateY: "-5vh" }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			style={{ position: "absolute" }}
			transition={{ ease: "easeOut" }}
		>
			<WrappedElement {...props} />
		</motion.div>
	);
}

export default App;

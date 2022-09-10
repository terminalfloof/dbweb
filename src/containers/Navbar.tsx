import { useState } from "react";
import { createStyles, Navbar, Menu } from "@mantine/core";
import {
	IconBellRinging,
	IconFingerprint,
	IconKey,
	IconSettings,
	Icon2fa,
	IconDatabaseImport,
	IconReceipt2,
	IconLogout,
	TablerIcon,
} from "@tabler/icons";
import { UserButton } from "../components";

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: "flex",
			alignItems: "center",
			textDecoration: "none",
			fontSize: theme.fontSizes.sm,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[1]
					: theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color: theme.colorScheme === "dark" ? theme.white : theme.black,

				[`& .${icon}`]: {
					color:
						theme.colorScheme === "dark"
							? theme.white
							: theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[2]
					: theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			"&, &:hover": {
				backgroundColor: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).color,
				[`& .${icon}`]: {
					color: theme.fn.variant({
						variant: "light",
						color: theme.primaryColor,
					}).color,
				},
			},
		},
	};
});

type navprops = {
	activeChange: (label: string) => void;
	data: {
		label: string;
		icon: TablerIcon;
		element: JSX.Element;
	}[];
};

export default function NavbarSimple({ activeChange, data }: navprops) {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState("Dashboard");

	const links = data.map((item) => (
		<a
			className={cx(classes.link, {
				[classes.linkActive]: item.label === active,
			})}
			key={item.label}
			onClick={(event) => {
				event.preventDefault();
				setActive(item.label);
				activeChange(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</a>
	));

	return (
		<Navbar width={{ sm: 300 }} p="md">
			<Navbar.Section grow>{links}</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<Menu position="right-end" width={200}>
					<Menu.Target>
						<div>
							<UserButton
								image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GK2F70JKKAtyVo94TUOhCiLxaaCLum0TL7PkCZmwKWZuQ7M8dGfi00PEGzA3wMaJyH0:https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/03/Steve_%2528Dungeons%2529.png/revision/latest/scale-to-width-down/217%3Fcb%3D20200603190757&usqp=CAU"
								name="Steve"
								email="steve#1118"
							/>
						</div>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label>Danger zone</Menu.Label>
						<Menu.Item color="red" icon={<IconLogout size={14} />}>
							Logout.
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Navbar.Section>
		</Navbar>
	);
}
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
	IconLogin,
} from "@tabler/icons";
import { UserButton } from "../components";
import { UserButtonProps } from "../components/UserButton";
import { useAuth0 } from "@auth0/auth0-react";

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
	const { loginWithRedirect, user, logout, isAuthenticated, isLoading } =
		useAuth0();

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
								{...(isAuthenticated
									? {
											image: user?.picture,
											name: user?.name,
											email: user?.email,
									  }
									: {
											image: "https://i.ebayimg.com/images/g/MTQAAOSw0BhiGPPk/s-l500.jpg",
											name: "tsukasa plush",
											email: "login, or stay stuck in this form. forever.",
									  })}
							/>
						</div>
					</Menu.Target>

					<Menu.Dropdown>
						{user == null ? (
							<Menu.Item
								color="green"
								icon={<IconLogin size={14} />}
								onClick={() => {
									loginWithRedirect();
								}}
							>
								Login
							</Menu.Item>
						) : (
							<>
								<Menu.Label>Danger zone</Menu.Label>
								<Menu.Item
									color="red"
									icon={<IconLogout size={14} />}
									onClick={() => {
										logout({
											returnTo: window.location.origin,
										});
									}}
								>
									Logout.
								</Menu.Item>
							</>
						)}
					</Menu.Dropdown>
				</Menu>
			</Navbar.Section>
		</Navbar>
	);
}

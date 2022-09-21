import { Card, Image, Text, Badge, Button, Group, Center } from "@mantine/core";

export default function Orders() {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src="https://files.catbox.moe/bwu0pp.jpeg"
					height={160}
					alt="oh no he's gonna get hit with ketchup"
				/>
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Text weight={500}>damn he's gonna get hit</Text>
				<Badge color="pink" variant="light">
					save him!!
				</Badge>
			</Group>

			<Text size="sm" color="dimmed">
				oh my god he's gonna get hit with a ketchup bottle look at
				<br />
				him he's just accepted his fate you gotta do something man 😭😭
			</Text>

			<Button variant="light" color="blue" fullWidth mt="md" radius="md">
				please save this poor dude
			</Button>
		</Card>
	);
}

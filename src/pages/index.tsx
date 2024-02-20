import UserProfile from "@/components/user-profile";
import useFrontContext from "@/hooks/use-front-context";

function ContextMessageWrapper({ message }: { message: string }) {
	return (
		<div className="flex h-screen w-full items-center justify-center break-words px-4 text-center">
			<p>{message}</p>
		</div>
	);
}

export default function Home() {
	const context = useFrontContext();

	if (!context)
		return (
			<ContextMessageWrapper
				message={"Waiting to connect to the Front context."}
			/>
		);

	switch (context.type) {
		case "noConversation":
			return (
				<ContextMessageWrapper
					message={
						"No conversation selected. Select a conversation to use this plugin."
					}
				/>
			);
		case "singleConversation":
			return (
				<div>
					<UserProfile context={context} />
				</div>
			);
		case "multiConversations":
			return (
				<ContextMessageWrapper
					message={
						"Multiple conversations selected. Select only one conversation to use this plugin."
					}
				/>
			);
		default:
			console.error(`Unsupported context type: ${context.type}`);

			return (
				<ContextMessageWrapper message="Sorry, unsupported context type" />
			);
	}
}

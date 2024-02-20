import {
	ApplicationMessageId,
	SingleConversationContext,
} from "@frontapp/plugin-sdk";
import { useEffect, useState } from "react";

import useFrontContext from "./use-front-context";

export default function useGetLatestMessage():
	| ApplicationMessageId
	| undefined {
	const [latestMessageId, setLatestMessageId] = useState<
		ApplicationMessageId | undefined
	>();
	const context = useFrontContext() as SingleConversationContext;

	useEffect(() => {
		const getLatestMessage = async () => {
			const res = await context?.listMessages();
			if (res.results.length > 0) {
				const latestMessageIndex = res.results.length - 1;
				setLatestMessageId(res.results[latestMessageIndex].id);
			} else {
				setLatestMessageId(undefined);
			}
		};

		void getLatestMessage();
	}, [context]);

	return latestMessageId;
}

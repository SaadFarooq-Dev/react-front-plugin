import Front, { ConversationContext } from "@frontapp/plugin-sdk";
import { createContext, FC, ReactElement, useEffect, useState } from "react";

/*
 * Context.
 */

export const FrontContext = createContext<ConversationContext | undefined>(
	undefined,
);

/*
 * Component.
 */

export const FrontContextProvider: FC<{ children: ReactElement }> = ({
	children,
}) => {
	const [context, setContext] = useState<ConversationContext>();

	useEffect(() => {
		const subscription = Front.contextUpdates.subscribe((frontContext) => {
			setContext(frontContext as ConversationContext);
		});
		return () => subscription.unsubscribe();
	}, []);

	return (
		<FrontContext.Provider value={context}>{children}</FrontContext.Provider>
	);
};

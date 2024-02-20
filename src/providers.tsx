import { NextUIProvider } from "@nextui-org/react";

import { FrontContextProvider } from "@/contexts/front-context";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<FrontContextProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</FrontContextProvider>
	);
}

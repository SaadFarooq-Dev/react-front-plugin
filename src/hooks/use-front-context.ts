import { useContext } from "react";

import { FrontContext } from "@/contexts/front-context";

export default function useFrontContext() {
	return useContext(FrontContext);
}

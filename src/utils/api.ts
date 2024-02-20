import ky from "ky";

import { env } from "@/config/env";

const api = ky.create({ prefixUrl: env.BASE_API_URL });

export { api };

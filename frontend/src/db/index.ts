import { PrismaClient } from "../../generated/prisma/client";

import { withAccelerate } from "@prisma/extension-accelerate";

export const db = new PrismaClient().$extends(withAccelerate());

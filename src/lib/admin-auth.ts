import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export class AdminAuthError extends Error {
  status: number;

  constructor(message = "Unauthorized", status = 401) {
    super(message);
    this.name = "AdminAuthError";
    this.status = status;
  }
}

export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email;
  if (!email) {
    throw new AdminAuthError("Unauthorized", 401);
  }

  const admin = await prisma.adminUser.findUnique({ where: { email } });
  if (!admin) {
    throw new AdminAuthError("Unauthorized", 401);
  }

  const issuedAt = Number(session.authIssuedAt ?? 0);
  if (admin.passwordChangedAt && issuedAt && issuedAt * 1000 < admin.passwordChangedAt.getTime()) {
    throw new AdminAuthError("Session expired. Please sign in again.", 401);
  }

  return { session, admin };
}


'use server';

import * as z from "zod";
import bcrypt from "bcryptjs";
import { SettingsSchema } from "@/schemas";
import { currentUser } from "@/lib/session";
import { getUserByEmail, getUserById } from "@/data/users";
import { prisma } from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { revalidatePath } from "next/cache";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();

    if (!user) {
        return { error: "Não autorizado" };
    }

    if (!user.id) {
        return { error: "ID de usuário está indefinido" };
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: "Não autorizado" };
    }

    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email);

        if (existingUser && existingUser.id !== user.id) {
            return { error: "E-mail existente" };
        }

        const verificationToken = await generateVerificationToken(values.email);

        await sendVerificationEmail({
            name: existingUser?.name ?? "User",
            email: verificationToken.identifier,
            token: verificationToken.token
        });

        return { success: "Verificação de e-mail enviada!" };
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(values.password, dbUser.password);

        if (!passwordMatch) {
            return { error: "Senha invalida" };
        }

        const hashedPassword = await bcrypt.hash(values.newPassword, 10);
        values.password = hashedPassword;
        values.newPassword = undefined;
    }

    await prisma.user.update({
        where: { id: dbUser.id },
        data: {
            ...values,
        },
    });

    revalidatePath("/dashboard/settings");
    return { success: "Configurações atualizadas!" };
};
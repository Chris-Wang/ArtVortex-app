import prisma from "@/db/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest
) {
    const body = await req.json();
    console.log(body.id, body.completed);
    await prisma.todo.update({
        where: {
            id: +body.id,
        },
        data: {
            completed: body.completed,
        },
    });

    return NextResponse.json({message: "updated"});
}
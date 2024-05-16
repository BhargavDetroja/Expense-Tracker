import { addExpense, getExpenses } from "@/lib/data";
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {

    try {
        const expense = getExpenses();
        return NextResponse.json({ data: expense, message: "Get Data" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }

}

export const POST = async (req: Request, res: Response) => {
    try {
       
        const { amount,description,date,category,note } = await req.json();
        const body = { id: Date.now().toString(),amount,description,date,category,note }
        addExpense(body);
        return NextResponse.json({ message: "Data Added", expense : body }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
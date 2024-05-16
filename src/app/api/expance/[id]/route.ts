import { getExpense, getExpenses } from "@/lib/data";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// get 
export const GET = async (req: Request, res: NextResponse) => {

    // try {
       const id = req.url.split('/expance/')[1]
       console.log(id);
        const expense = getExpense(id)
        return NextResponse.json({ data: expense, message: "Get Data" }, { status: 200 })
    
    // } catch (error) {
    //     return NextResponse.json({ error: error }, { status: 500 })
    // }

}
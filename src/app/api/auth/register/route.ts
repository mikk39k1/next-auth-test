import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(request: Request) {
    try{
        const {email, password} = await request.json();
        console.log({email, password})

        const hashedPassword = await hash(password, 10);

        const response = await fetch("http://localhost:4321/api/v1/kinde-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, hashedPassword})
        })
        console.log({response})

    }catch(e){
        console.log({e})
    }

    return NextResponse.json({message: "Success"})
}
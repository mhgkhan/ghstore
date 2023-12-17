import { NextResponse,NextRequest } from "next/server"

export function GET(request){
    console.log(request)
    return NextResponse.json({message:req},{status:200})
}


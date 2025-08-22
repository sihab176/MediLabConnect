// import { getToken } from "next-auth/jwt"
// import { NextResponse } from "next/server"

// export const middleware=async(req)=>{
//     const token=await getToken({req,
//         secureCookie: process.env.NODE_ENV ==="production"? true : false

//     })
//     if(token){
//         return NextResponse.next()
//     }else{
//         return NextResponse.redirect(new URL("/login",req.url))

//     }
    
// }
// export const config={
//         matcher: ["/Dashboard"]
//     }


// middleware.js

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Dashboard"],
};




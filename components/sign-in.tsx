"use client"

import {signIn, signOut} from "next-auth/react";

export function SignInButton(){
    return <button onClick={()=>signIn()} className="bg-purple-400 p-2 rounded-md">Sign In</button>
}

export function SignOutButton(){
    return <button onClick={()=>signOut()} className="bg-red-600 p-2 rounded-md">Sign Out</button>
}

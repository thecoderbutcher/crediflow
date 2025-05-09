'use client'
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const onClick = (provider: "google") => { signIn(provider, {callbackUrl: DEFAULT_LOGIN_REDIRECT})}

  return (
    <div className='fle items-center w-full gap-x-2'>
        <button 
          onClick={() => onClick('google')}
          className="flex items-center justify-center w-full gap-x-2 py-2 border border-secondary/10 rounded-md"
        >
            <FcGoogle className='h-6 w-6'/>
        </button> 
        
    </div>
  )
}

export default SocialLogin
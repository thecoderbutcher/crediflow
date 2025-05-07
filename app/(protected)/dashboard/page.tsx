
import { signOut } from "@/auth";

const page = async () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4"> 
      <form 
            action={async () => {
              "use server"
              await signOut();
            }}
          >
            <button type="submit">Logout</button> 
          </form>
    </div>
  ) 
}

export default page
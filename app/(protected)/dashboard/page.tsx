import { auth } from "@/auth"

const page = () => {
    const session =  auth()
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default page
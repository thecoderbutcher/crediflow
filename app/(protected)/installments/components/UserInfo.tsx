import Image from "next/image"

const UserInfo = () => {
  return (
    <div className="flex items-center gap-2">
        <Image src="/app/default-user.webp" alt="user" width={10} height={10} className=" w-4 h-4"/>
        <p className="text-sm font-bold">John Doe</p>
    </div>
  )
}

export default UserInfo
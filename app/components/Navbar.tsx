import Link from "next/link";

export default function ResponsiveNavbar() { 

  return (
    <nav className="bg-secondary shadow-md px-4 py-3">
       <ul>
          <li><Link href="/login" className="block hover:text-primary">Login</Link></li>
        </ul>
    </nav>
  ); 
}

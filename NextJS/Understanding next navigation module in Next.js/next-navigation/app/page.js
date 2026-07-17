"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname()
  const useseachparms = useSearchParams()
  return (
    <div>
      Hey this is our page and blog is {useseachparms.get('blog')} and utm source is {useseachparms.get('utm_source')}
    </div>

  );
}

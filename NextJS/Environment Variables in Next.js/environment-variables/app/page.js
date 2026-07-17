// "use client"
import Image from "next/image";

export default function Home() {
  console.log("The ID is",process.env.ID)
  console.log("The SECRET is",process.env.SECRET)
  return (
  <div>
    Hey this ia home.The id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.SECRET}
  </div>
  );
}

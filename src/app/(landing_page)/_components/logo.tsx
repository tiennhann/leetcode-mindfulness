import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets:["latin"],
    weight: ["400" ,"600"],
});

export const Logo = () => {
    return ( 
        <div>
            <Image
                src="logo-black.svg"
                height="40"
                width="40"
                alt="logo"
                className=""
            />
            <p className={cn("font-semibold",font.className)}>
                Leetcode Mindfulness
            </p>
        </div>
     );
}
 
export default Logo;
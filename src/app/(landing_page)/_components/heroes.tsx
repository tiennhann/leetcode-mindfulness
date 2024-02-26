import Image from "next/image";

export const Heroes = () => {
    return ( 
        <div className="flex items-center justify-center max-w-5xl">
            <div className="relative w-[300px] h-[300px] sm:w-[350px]
            sm:h-[350px] md:w-[400px] md:h-[400px]">
                <Image
                    src='/heroes.webp'
                    fill
                    className="object"
                    alt="heroes"
                />
            </div>
        </div>
     );
}
 
export default Heroes

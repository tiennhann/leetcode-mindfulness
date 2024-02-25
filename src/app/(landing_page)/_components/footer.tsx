
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
export const Footer = () => {
    return ( 
        <div className="flex items-center w-full p-6">
            <Logo />
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex items-center text-muted-foreground gap-x-5">
                <Button variant="ghost" size="sm">
                    About us
                </Button>
                <Button variant="ghost" size="sm">
                    Term & Conditions
                </Button>
            </div>
        </div>
     
     );
}
 
export default Footer ;
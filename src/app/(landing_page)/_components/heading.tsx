"use client";
import { Button } from "@/components/ui/button";
export const Heading = () => {
    return (
        <div className="max-w-5xl space-y-5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Welcome to Leetcode Mindfulness</h1>
            <h3 className="text-base sm:text-5xl md:text-2xl font-medium">
                LeetCode Mindfulness is your second brain <br />make it easier, smarter.
            </h3>
            < Button>
                Let's code
            </Button>
        </div>

      );
}
 
export default Heading;
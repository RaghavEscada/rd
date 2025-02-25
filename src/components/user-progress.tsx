import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
type Props ={
    activeCourse: {title:String; symbol:String;};
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const Userprogress = ({activeCourse,points,hearts,hasActiveSubscription}:Props) => {
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <h2 className="text-2xl"
                    >{activeCourse.symbol}</h2>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-black">
                    <Image src="/points.svg" height={28} width={28} alt="points" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-black">
                    <Image src="/heart.svg" height={22} width={22} alt="hearts" className="mr-2"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/>: hearts}
                </Button>
            </Link>
        </div>
    )
}
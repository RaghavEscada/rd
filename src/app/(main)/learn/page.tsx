import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { Userprogress } from "@/components/user-progress";

const LearnPage = () =>{
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            
            <StickyWrapper>
            <Userprogress
                activeCourse={{ title: "Addition", symbol: "Addition +" }}
                hearts={5}
                points={100}
                hasActiveSubscription={false}
            />

            </StickyWrapper>
            <FeedWrapper>
                <Header title="Addition"></Header>
            </FeedWrapper>
            
        </div>
    )
}

export default LearnPage;
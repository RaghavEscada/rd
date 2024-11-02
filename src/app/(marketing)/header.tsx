import Image from 'next/image';
import rdImage from '@/app/assets/rd.png';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const Header = () => {
    return (
        <header className="h-20 border border-slate-300 w-full px-10 flex items-center justify-between">
            {/* Left side of the header */}
            <div className="flex items-center gap-3">
                <Image 
                    src={rdImage} 
                    alt="Description of your image" 
                    width={45} 
                    height={45} 
                />
                <span className="font-bold text-3xl">Rapid Digits</span>
            </div>

            {/* Right side of the header */}
            <ClerkProvider>
                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </ClerkProvider>
        </header>
    );
};

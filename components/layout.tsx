"use client";
import React, { useState,useEffect } from "react";
import ThemeSwitcher from "./themeSwitcher";
import {Sheet,SheetContent,} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout bg-background">
      <NavbarUI />
      <main className="">{children}</main>
      <Footer/>
    </div>
  );
}
export function NavbarUI() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NabarbarFLoat />
    </div>
  );
}

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div className="flex items-center">
//       <div
//         className={cn(
//           "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
//           className
//         )}
//       >
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="Services">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/web-dev">Web Development</HoveredLink>
//               <HoveredLink href="/interface-design">
//                 Interface Design
//               </HoveredLink>
//               <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//               <HoveredLink href="/branding">Branding</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Products">
//             <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//               <ProductItem
//                 title="Algochurn"
//                 href="https://algochurn.com"
//                 src="https://assets.aceternity.com/demos/algochurn.webp"
//                 description="Prepare for tech interviews like never before."
//               />
//               <ProductItem
//                 title="Tailwind Master Kit"
//                 href="https://tailwindmasterkit.com"
//                 src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//                 description="Production ready Tailwind css components for your next project"
//               />
//               <ProductItem
//                 title="Moonbeam"
//                 href="https://gomoonbeam.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//                 description="Never write from scratch again. Go from idea to blog in minutes."
//               />
//               <ProductItem
//                 title="Rogue"
//                 href="https://userogue.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//                 description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//               />
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Pricing">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/hobby">Hobby</HoveredLink>
//               <HoveredLink href="/individual">Individual</HoveredLink>
//               <HoveredLink href="/team">Team</HoveredLink>
//               <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//       <div className="fixed top-10 right-3 z-50">
//         <ThemeSwitcher />
//       </div>
//     </div>
//   );
// }

function NabarbarFLoat() {

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };
  const [bgClass, setBgClass] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll position as needed
        setBgClass('bg-background border-b'); // Change to your desired Tailwind class
      } else {
        setBgClass('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full">
      <nav className={`relative w-full md:static border-border ${bgClass}`}>
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                src="/akashInsights.png"
                width={50}
                height={50}
                alt="Akash Insights"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={toggleSheet}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
          {/* Sheet for mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen} key="right">
            <SheetContent>
              <div className="flex flex-col items-start p-4">
                <ul className="space-y-4">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="text-gray-600 hover:text-indigo-600">
                      <a href={item.path}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden md:inline-block">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>  );
}


function Footer(){
    return (
        <div className="border-t mt-10 border-border dark:border-white/[0.1] px-8 py-20 bg-background">
          <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-start">
            <div>
              <div className="mr-4 md:flex mb-4">
                <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10 py-0">
                  <div className="relative h-8 w-8 md:h-10 md:w-10  text-white flex items-center justify-center rounded-md text-sm antialiased">
                    <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                    <div className="text-sm text-emerald-500 relative z-20">
                    <Link href="/">
              <Image
                src="/akashInsights.png"
                width={40}
                height={40}
                alt="Akash Insights"
              />
            </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-black dark:text-white font-sans">Akash Insights</h1>
                  </div>
                </div>
              </div>
              <div>
                A product by{" "}
                <a target="_blank" rel="noopener noreferrer" className="dark:text-sky-500 text-neutral-600 font-medium" href="https://aceternity.com">
                  Akash
                </a>
              </div>
              <div className="mt-2">
                Building in public at{" "}
                <a className="dark:text-sky-500 font-medium text-neutral-600" target="_blank" rel="noopener noreferrer" href="https://twitter.com/mannupaaji">
                  @akashtqb
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/pricing">Pricing</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/components">Components</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/templates">Templates</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/categories">Categories</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/blog">Blog</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/tools/box-shadows">Box Shadows</a>
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <a target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://twitter.com/aceternitylabs">Twitter</a>
                <a target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://discord.gg/ftZbQvCdN7">Discord</a>
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <a target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://pro.aceternity.com">Aceternity UI Pro</a>
                <a target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://aceternity.com">Aceternity</a>
              </div>
            </div>
          </div>
        </div>
      );

}
"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PlusCircle, Grid3X3, AlignJustify } from "lucide-react";
import { toggleLayout } from "@/store/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";

const Navbar = () => {
  const layoutType = useAppSelector((state) => state.layoutState.layout);
  const dispatch = useAppDispatch();

  return (
    <header className="top-0 z-10 sticky bg-white/80 dark:bg-black/60 backdrop-blur-md border-violet-100 dark:border-violet-900 border-b">
      <div className="mx-auto px-4 py-4 container">
        <div className="flex flex-row justify-between items-center gap-4">
          <Link href="/">
            <h1 className="bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600 font-bold text-transparent text-xl md:text-3xl">
              Bloggy
            </h1>
            <p className="max-md:hidden text-gray-600 dark:text-gray-400 text-sm">
              Where ideas take visual form
            </p>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="layout-toggle"
                  checked={layoutType === "infinite"}
                  onCheckedChange={() => dispatch(toggleLayout())}
                />
                <Label
                  htmlFor="layout-toggle"
                  className="flex items-center gap-2"
                >
                  {layoutType === "masonry" ? (
                    <>
                      <Grid3X3 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      <span className="max-md:hidden">Masonry</span>
                    </>
                  ) : (
                    <>
                      <AlignJustify className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span className="max-md:hidden">Infinite</span>
                    </>
                  )}
                </Label>
              </div>
            </div>
            <DarkModeToggle />
            <Link href="/new">
              <Button className="flex flex-row items-center gap-2 bg-gradient-to-r from-violet-600 hover:from-violet-700 to-rose-600 hover:to-rose-700 text-white cursor-pointer">
                <PlusCircle className="w-6 h-6" />
                <span className="max-md:hidden">New Post</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

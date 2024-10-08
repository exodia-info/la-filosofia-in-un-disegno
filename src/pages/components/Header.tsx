import React from "react";
import {
  SignInButton,
  SignOutButton,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { VscAccount } from "react-icons/vsc";
import { exodia, exodiaviola } from "../../../public/assets";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { UserButton } from "@clerk/nextjs";
import Lingue from "./Lingue";
import Button from "../Lingue";
import { useTranslation } from "react-i18next";

const Header = () => {
  const user = useUser();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <section className=" glass sticky left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b-2 border-b-slate-400 bg-slate-100 p-4 px-2 md:px-4">
      <Link href="/">
        <Image alt="logo" src={exodiaviola} className="h-8 w-auto md:h-10" />
      </Link>
      <div className="flex justify-end">
        <Button />

        <div className="mx-0 hidden flex-grow md:flex">
          <div className="relative">
            <input
              onClick={() => {
                toast.error(t("toast"), {
                  className:
                    " font-semibold mt-12 md:mt-0 text-sm md:text-base",
                });
              }}
              type="text"
              placeholder={t("cerca")}
              className=" w-full max-w-[40vw] rounded-lg border-2 border-slate-300 px-[4px] py-2 text-xs focus:border-violet-500 focus:outline-none md:px-4 md:py-2 md:text-base"
            />
          </div>
        </div>

        <>
          <div className="flex items-center">
            {!user.user && (
              <>
                <Link
                  href="sign-in"
                  className="animato ml-1 mr-0 text-[10px] font-semibold text-slate-800 hover:text-slate-500 md:ml-4 md:mr-4 md:text-base"
                >
                  Sign In
                </Link>
                <Link
                  href="sign-up"
                  className="animato ml-1 mr-0 text-[10px] font-semibold text-slate-800 hover:text-slate-500 md:mr-4 md:text-base"
                >
                  Sign Up
                </Link>
              </>
            )}
            <div className="ml-2 md:ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Header;

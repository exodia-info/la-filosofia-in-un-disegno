import Link from "next/link";
import React from "react";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

type Props = {};

const Indietro = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Link
        className="button h-[5vh] w-full rounded-lg border-2 border-slate-300 font-semibold focus:outline-none"
        href={"/"}
        role="button"
      >
        <span className="px-4 py-2 text-base md:text-lg">{t("indietro")}</span>
        <div className="icon">
          <i className="fa fa-remove">
            <VscArrowSmallLeft />
          </i>
          <i className="fa fa-check"></i>
        </div>
      </Link>
    </>
  );
};

export default Indietro;

import React from "react";

type layoutProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <section className="flex min-h-screen w-[100%] justify-center border-x-2 border-slate-400 md:w-[80%]">
      {children}
    </section>
  );
};

export default Layout;

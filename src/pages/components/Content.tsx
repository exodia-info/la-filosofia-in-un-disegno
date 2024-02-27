import React from "react";

type ContentProps = {
  content: JSX.Element;
};

function Content({ content }: ContentProps) {
  return (
    <section className="  contentContainer prose prose-slate max-w-none md:prose-lg prose-h1:text-2xl md:prose-h1:text-4xl">
      {content}
    </section>
  );
}

export default Content;

import React from "react";

type ContentProps = {
  content: JSX.Element;
};

function Content({ content }: ContentProps) {
  return (
    <section className="  contentContainer prose prose-base prose-slate max-w-none md:prose-lg">
      {content}
    </section>
  );
}

export default Content;

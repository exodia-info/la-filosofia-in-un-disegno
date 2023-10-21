import React from 'react'

type ContentProps = {
    content: JSX.Element
}

function Content({ content }: ContentProps) {
    return (
        <section className='contentContainer prose prose-lg prose-slate max-w-none'>
            {content}
        </section>

    )
}

export default Content
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import { useTextContext } from './TextContext';

function Cerca({ testo = '' }: any) {

    // Definiamo due variabili di stato: content e searchText.
    // content contiene il testo che vogliamo esaminare e searchText è la parola che stiamo cercando.

    const { setHighlightedText } = useTextContext()
    const [content, setContent] = useState(testo);
    const [searchText, setSearchText] = useState('');

    // Questa funzione handleSearch viene chiamata ogni volta che scriviamo o cambiamo il testo nella casella di ricerca.

    const handleSearch = (text: string) => {
        setSearchText(text);
        setHighlightedText(text)
    };

    // Questa funzione getHighlightedText analizza il testo e ritorna un array di componenti <span>.
    // Ogni componente <span> rappresenta una parte del testo. Se trova la parola cercata, la sottolinea.
    const getHighlightedText = () => {
        // Se non stiamo cercando niente, ritorna il testo originale.
        if (!searchText) {
            return content;
        }
        // Creiamo un'espressione regolare (una specie di strumento magico) per cercare la parola cercata nel testo.
        const regex = new RegExp(`(${searchText})`, 'gi');

        // Suddividiamo il testo in pezzi in base a dove si trovano le parole cercate.
        const parts = content.split(regex);

        return parts.map((part, index) => (
            <span
                key={index}
                className={part.toLowerCase() === searchText.toLowerCase() ? ' bg-slate-50 highlighted' : ''}
            >
                {part}
            </span>
        ));
    };

    return (
        <div>
            <div>
                <input onChange={(e) => handleSearch(e.target.value)}
                    type='text' placeholder='Cerca una parola chiave' className='w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-violet-500' />
            </div>
            <div>{getHighlightedText()}</div>
        </div>
    );
}

export default Cerca;
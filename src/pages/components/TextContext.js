import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext();

export const useTextContext = () => useContext(TextContext);

// @ts-ignore
export function TextProvider({ children }) {
    const [highlightedText, setHighlightedText] = useState([]);

    return (
        <TextContext.Provider value={{ highlightedText, setHighlightedText }}>
            {children}
        </TextContext.Provider>
    );
}
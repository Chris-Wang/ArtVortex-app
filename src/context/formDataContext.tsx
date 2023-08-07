"use client";

import { createContext, useState, ReactElement } from 'react';

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const FormDataContext = createContext({ 
    formData: {
        prompt: "",
    },
    updatePrompt: (prompt: string) => {},
});

export const FormDataContextProvider = ({ children }: ChildrenType): ReactElement => {
    const [formData, setFormData] = useState({
        prompt: "",
    });

    const updatePrompt = (prompt: string) => {
        setFormData(prev => {
            return {
                ...prev,
                prompt,
            };
        });
    }

    return (
        <FormDataContext.Provider value={{ formData, updatePrompt }}>
            {children}
        </FormDataContext.Provider>
    );
}
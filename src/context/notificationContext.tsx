"use client";

import { createContext, useState, ReactElement } from 'react'

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const NotificationContext = createContext(null);

export const NotificationContextProvider = ({ children }: ChildrenType): ReactElement => {
    const [notification, setNotification] = useState({title: "", message: "", type: true});

    const notify = (message: string, type: boolean = true, title: string = "Confirmation") => {
        setNotification({ message, title, type});
    } 

    const stop = () => {
        setNotification({ message: "", title: "", type: true});
    }

    return (
        <NotificationContext.Provider value={{ notification, notify, stop }}>
            {children}
        </NotificationContext.Provider>
    );
}
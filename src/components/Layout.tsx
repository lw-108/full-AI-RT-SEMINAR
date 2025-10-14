import React from 'react';
import { FloatingDockDemo } from './FloatingDockDemo';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <FloatingDockDemo />
            {children}
        </>
    );
};
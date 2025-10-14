import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconRobot,
    IconComponents,
    IconTools,
    IconBrandGithubCopilot,
    IconFileLambda,
    IconMail,
    IconPaw,
} from "@tabler/icons-react";
import CatThemeToggle from "./CatThemeToggle";

export function FloatingDockDemo() {
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleItemClick = (href: string, isExternal: boolean = false) => {
        if (isExternal) {
            window.open(href, '_blank', 'noopener,noreferrer');
        } else if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
    };

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#index",
        },
        {
            title: "AI Tools",
            icon: (
                <IconBrandGithubCopilot className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#ai-tools",
        },
        {
            title: "React",
            icon: (
                <IconComponents className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#react-comps",
        },
        {
            title: "Theme",
            icon: <CatThemeToggle />,
            href: "#theme",
            onClick: toggleTheme,
        },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#newsletter",
        },
        {
            title: "FeedBack",
            icon: (
                <IconFileLambda className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#feedback",
        },
        {
            title: "Footer",
            icon: (
                <IconPaw className="h-full w-full text-neutral-600 dark:text-white" />
            ),
            href: "#footer",
        },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="
                bg-white/10
                dark:bg-black/10
                backdrop-blur-md
                backdrop-saturate-150
                border border-white/20
                dark:border-white/10
                rounded-2xl
                shadow-2xl
                shadow-black/10
                dark:shadow-black/20
            ">
                <FloatingDock
                    mobileClassName="translate-y-0"
                    items={links.map(item => ({
                        title: item.title,
                        icon: item.icon,
                        href: item.href,
                        onClick: () => {
                            if (item.title === "Theme" && item.onClick) {
                                item.onClick();
                            } else {
                                handleItemClick(item.href, item.isExternal);
                            }
                        }
                    }))}
                />
            </div>
        </div>
    );
}
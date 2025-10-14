'use client'
import React, { useEffect, useState } from "react"

const CatThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [gifLoaded, setGifLoaded] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    const handleThemeToggle = () => {
        if (isAnimating) return
        
        setIsAnimating(true)
        const newIsDark = !isDark

        // Create overlay with GIF animation
        const overlay = document.createElement('div')
        overlay.className = 'fixed inset-0 z-[9999] pointer-events-none'
        overlay.innerHTML = `
            <div class="absolute inset-0 bg-black opacity-0 animate-fade-in"></div>
            <img 
                src="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s" 
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-cover rounded-full animate-scale-up"
                alt="Theme transition"
            />
        `
        document.body.appendChild(overlay)

        // Apply theme change after animation starts
        setTimeout(() => {
            setIsDark(newIsDark)
            
            if (newIsDark) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }

            // Remove overlay after animation
            setTimeout(() => {
                document.body.removeChild(overlay)
                setIsAnimating(false)
            }, 1500)
        }, 300)
    }

    const handleGifLoad = () => {
        setGifLoaded(true)
    }

    // Add animation styles
    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 0.7; }
            }
            @keyframes scale-up {
                0% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(5); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(10); opacity: 0; }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
            .animate-scale-up {
                animation: scale-up 1.5s ease-in-out forwards;
            }
        `
        document.head.appendChild(style)
        
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    if (!mounted) {
        return (
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center" />
        )
    }

    return (
        <button
            onClick={handleThemeToggle}
            disabled={isAnimating}
            className={`
                h-8 w-8 
                rounded-full 
                hover:scale-110 
                transition-all 
                duration-200
                cursor-pointer
                flex items-center justify-center
                overflow-hidden
                group
                ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label="Toggle theme"
        >
            {!gifLoaded && (
                <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
            )}
            <img
                src="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                alt="Theme toggle"
                className={`h-6 w-6 object-cover rounded-full transition-opacity duration-300 ${
                    gifLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-110`}
                onLoad={handleGifLoad}
            />
        </button>
    )
}

export default CatThemeToggle
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemoUIComponents() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 z-50 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 lg:h-60 object-cover object-top"
                />
              </motion.div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex justify-between items-start p-6">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-lg mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="ml-4 px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="px-6 pb-6 flex-1 overflow-hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm h-full overflow-y-auto dark:text-neutral-400 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.3)_transparent]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "UI Component",
    title: "Button",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    ctaText: "Docs",
    ctaLink: "https://ui.shadcn.com/docs/components/button",
    content: () => {
      return (
        <p>
          The Button component is a versatile and customizable UI element that enables user interactions throughout your application. Built with accessibility in mind, it supports multiple variants including default, destructive, outline, secondary, ghost, and link styles. <br /> <br /> 
          Features include hover states, focus indicators, disabled states, and full keyboard navigation support. Perfect for forms, CTAs, and interactive elements across your React application.
        </p>
      );
    },
  },
  {
    description: "UI Component",
    title: "Card",
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&q=80",
    ctaText: "Docs",
    ctaLink: "https://ui.shadcn.com/docs/components/card",
    content: () => {
      return (
        <p>
          Card is a flexible container component used to group related content and actions. It provides a clean, consistent way to display information with built-in support for headers, content areas, and footers. <br /> <br /> 
          Ideal for dashboards, product listings, user profiles, and content previews. The component seamlessly adapts to dark mode and supports custom styling through Tailwind CSS classes.
        </p>
      );
    },
  },
  {
    description: "UI Component",
    title: "Dialog",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    ctaText: "Docs",
    ctaLink: "https://ui.shadcn.com/docs/components/dialog",
    content: () => {
      return (
        <p>
          Dialog component creates accessible modal windows that capture user attention for important interactions or information. Built on Radix UI primitives, it ensures proper focus management and keyboard navigation. <br /> <br /> 
          Features include backdrop overlay, close on escape, click outside to close, and customizable trigger elements. Perfect for confirmations, forms, and critical user flows.
        </p>
      );
    },
  },
  {
    description: "UI Component",
    title: "Input",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    ctaText: "Docs",
    ctaLink: "https://ui.shadcn.com/docs/components/input",
    content: () => {
      return (
        <p>
          Input component provides a styled text input field with consistent appearance across your application. It supports all standard HTML input attributes and seamlessly integrates with form libraries like React Hook Form. <br /> <br /> 
          Features include placeholder text, disabled states, error states, and full accessibility support. Essential for collecting user data in forms, search bars, and text entry fields.
        </p>
      );
    },
  },
];
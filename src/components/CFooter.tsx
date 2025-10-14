import React from "react";

const CFooter = () => {
    return (
        <>
            <footer className="relative z-10 bg-white dark:bg-black text-gray-700 dark:text-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12 -mt-10">
                            <div className="mb-10 w-full">
                                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <img
                                        src="/LW-O.png"
                                        alt="logo"
                                        className="w-full -mt-10 -mb-11"
                                    />
                                </a>
                                <p className="mb-7 text-base text-body-color ">
                                    Full-Stack Developer & AI Educator. Building the future with React,Next.js, and AI integration.
                                </p>
                                <p className="flex items-center text-sm font-medium text-dark ">
                                    <span className="mr-3 text-primary">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_941_15626)">
                                                <path
                                                    d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_941_15626">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>+91 90254 64209</span>
                                </p>
                            </div>
                        </div>

                        {/* Middle Section - Seminar Topics
                        <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
                            <LinkGroup header="Seminar Topics">
                                <NavLink link="/ai-settings" label="AI Tools & Integration" />
                                <NavLink link="/react-components" label="React Fundamentals" />
                                <NavLink link="/react-comps" label="Advanced Components" />
                                <NavLink link="/ai-tools" label="Full-Stack Development" />
                            </LinkGroup>
                        </div> */}

                        {/* Right Section - Connect With Me */}
                        <div className="w-full px-4 sm:w-1/3 lg:w-6/12 lg:ml-auto lg:text-right">
                            <div className="mb-10 w-full">
                                <h4 className="mb-9 text-lg font-semibold text-dark lg:text-right">
                                    Connect With Me
                                </h4>
                                <div className="mb-6 flex items-center justify-start lg:justify-end">
                                    <a
                                        
                                        href="https://github.com/lw-108"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        title="Link description"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            className="fill-current"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://stackoverflow.com/users/31676920/lw-19?tab=summary"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        title="Link description"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            className="fill-current"
                                        >
                                            <path d="M12.655 14.475V9.903h1.356V15.83H1.29V9.903h1.357v4.572h10.008z" />
                                            <path d="M3.466 11.854h8.954v-1.357H3.466v1.357zm0.203-2.923l8.75 1.823 0.271-1.303-8.75-1.823-0.271 1.303zm1.106-2.8l8.172 3.78 0.542-1.172-8.172-3.78-0.542 1.172zm2.102-2.656l7.25 5.69 0.813-1.037-7.25-5.69-0.813 1.037zM10.348.83L9.18 1.747l5.46 6.98 1.168-.917L10.348.83z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/lingeshwarma-malaiyappan-97a952368/"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        title="Link description"
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            className="fill-current"
                                        >
                                            <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="js"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        title="Link description"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            className="fill-current"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8S12.42 0 8 0zM2 8c0-0.7 0.13-1.37 0.37-2H4v1c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1v1.63C5.37 11.87 4.7 12 4 12c-1.1 0-2-0.9-2-2zM12 8c0 1.1-0.9 2-2 2-0.7 0-1.37-0.13-2-0.37V10c0.55 0 1-0.45 1-1V8c0-0.55 0.45-1 1-1h1V6h-1.63C10.13 5.37 10 4.7 10 4c0-1.1 0.9-2 2-2s2 0.9 2 2z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-base text-body-color lg:text-right">
                                    Full-Stack AI Developer 🚀<br />
                                    React • Next.js • AI Integration
                                </p>
                                <p className="mt-2 text-sm text-body-color lg:text-right">
                                    Join our seminar to master modern web development with AI!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background SVG elements */}
                <div>
                    <span className="absolute bottom-0 left-0 z-[-1]">
                        <svg
                            width={217}
                            height={229}
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                                fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_5"
                                    x1="76.5"
                                    y1={281}
                                    x2="76.5"
                                    y2="1.22829e-05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#ea580c" stopOpacity="0.08" />
                                    <stop offset={1} stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute right-10 top-10 z-[-1]">
                        <svg
                            width={75}
                            height={75}
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2={75}
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#ea580c" stopOpacity="0.31" />
                                    <stop offset={1} stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default CFooter;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-lg font-semibold text-dark ">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-primary "
            >
                {label}
            </a>
        </li>
    );
};
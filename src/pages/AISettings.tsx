import React, { useEffect } from "react";
import InfiniteMenu from "@/components/Infinitemenu";

const items = [
    {
        image: "https://i.ibb.co/PvJQqBzF/images-q-tbn-ANd9-Gc-QHx-Do-TXMk-YU19i-Zk-4os4y1-QTYf5-R7mg-WM6-Q-s.png",
        link: "https://replit.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Y4g7Qr4G/67bb57c7c62011c3b511a874-bolt-new-logo.png",
        link: "https://bolt.new/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/WNb7dDbk/emergent-logo-6865bf3dcc62d.jpg",
        link: "https://app.emergent.sh/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/mrWnv9CQ/image.png",
        link: "https://www.blackbox.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/rRxmCZFz/capacity.png",
        link: "https://capacity.so/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/jZ3zK8Qk/123263103-v-4.png",
        link: "https://www.pythagora.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/C3GVmBdM/claude-ai-icon.png",
        link: "https://claude.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/0jptqLq2/image-1.png",
        link: "https://www.perplexity.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/r2qqycM3/Icon.webp",
        link: "https://lovable.dev/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/q3GW0njq/image-4.png",
        link: "https://ollama.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/mFvr9xdv/image.png",
        link: "https://thunkable.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/mCTpF1Jm/quickbase.png",
        link: "http://www.quickbase.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/4Zdyxpgt/images-q-tbn-ANd9-Gc-Qe-ESFA8-t5-U6w-GX0n2z-Ei-GZyo6p-Os-BZ3-U4-Q-s.png",
        link: "https://bubble.io/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/mF1kLbC1/image-1.png",
        link: "https://codeconductor.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/pc9c7ZN/image-2.png",
        link: "https://mistral.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/kdKhkXd/image-3.png",
        link: "https://gemini.google.com/app?hl=en-IN",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/yFTg0KXk/vitara-ai-logo-e-2147483647-v-beta-t-Og-UYxjzc-THHsly50-On-Y6-Tjeb4-Uh-Hj7-EJOKKBe-Ntdyh-E.jpg",
        link: "https://build.vitara.ai/dashboard",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/4n1K7HFW/image-6.png",
        link: "https://grok.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/ycJNcmRv/codiumai-social-preview.png",
        link: "https://www.codium.ai/qodo/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/nNSrDf9t/deepseek-ai.jpg",
        link: "https://www.deepseek.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/DDFnhs4d/superblocks.png",
        link: "https://www.superblocks.com/clark",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/WY38DRZ/image-2.png",
        link: "https://chatgpt.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/GLNwWVQ/image-4.png",
        link: "https://pi.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/XfBkQbVF/image-5.png",
        link: "https://www.getmerlin.in/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/dJcBN1g6/image-11.png",
        link: "https://uibakery.io/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Gvfdp6t6/image-8.png",
        link: "https://www.appmysite.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/XkSJ0tsK/image-9.png",
        link: "https://shopney.co/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/mr2QC1H6/image-6.png",
        link: "https://you.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/6cC0y0wy/githubcopilot.png",
        link: "https://github.com/features/copilot",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/hJVRLbgy/image-7.png",
        link: "https://www.personal.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Rkwj5yRn/1200px-Microsoft-Copilot-Icon-svg.png",
        link: "https://copilot.microsoft.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Rkcn1Pfq/images-q-tbn-ANd9-Gc-Qela-D7-G6-XIdl-UTV3uvw-T9hwmb1-ZFyhzq-Kj-A-s.png",
        link: "https://airtable.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Gvfdp6t6/image-8.png",
        link: "https://www.appmysite.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/hJnk1PyK/idv3-Qm-Vt-MO-logos.jpg",
        link: "https://dashboard.mintlify.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/0V2ZLX8y/adalo.png",
        link: "https://www.adalo.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/nqZMQRNT/apple-icon.png",
        link: "https://chariotai.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/s9vH9DDV/0x0.png",
        link: "https://app.textcortex.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/ksgNpRnp/softgen-ai-logo-e-2147483647-v-beta-t-Ml-Y0heic-GNx-BSRueh-WFyqxz-JNRMMPWrks-VAMj-HB5-Pfk.jpg",
        link: "https://softgen.ai/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/Xx1VxzhH/68cd7c3a47288bc0a652b8ee-znegppeohzlm0sjlvlil.png",
        link: "https://base44.com/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/PvZw5vMM/create-xyz-icon-4xeunly8s1.jpg",
        link: "https://www.create.xyz/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/0N9VZ3t/fsncq94eient8wg91wcbk36vueaq.png",
        link: "https://www.softr.io/ai-app-generator",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/4gnxZsS6/image-12.png",
        link: "https://memex.tech/",
        title: "",
        description: "",
    },
    {
        image: "https://i.ibb.co/fdQjr7z5/dorik-com.png",
        link: "https://dorik.com/",
        title: "",
        description: "",
    },
];

const AISettings = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black mb-16" id="ai-tools">
            <main className="pt-20">
                <section className="bg-white dark:bg-black mb-16">
                    <div className="section-container opacity-0 animate-on-scroll">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="pulse-chip">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                                    ⚙️
                                </span>
                                <span>AI Tools Directory</span>
                            </div>
                        </div>

                        <h1 className="text-5xl font-display font-bold mb-8 text-foreground">
                            AI Development Tools
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Explore our curated collection of AI-powered development tools, assistants, and platforms to enhance your workflow.
                        </p>
                    </div>
                </section>

                <section className="bg-white dark:bg-black text-white">
                    <div style={{ height: "600px", position: "relative", backgroundColor: "#fff" }}>
                        <InfiniteMenu items={items} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AISettings;
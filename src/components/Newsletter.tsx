import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { emailDb } from "@/lib/firebase-Email";
import { collection, addDoc } from "firebase/firestore";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloadingPPT, setIsDownloadingPPT] = useState(false);
  const [isDownloadingDOC, setIsDownloadingDOC] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false); // New state to track if email was submitted

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Save email to your seminar-emails Firebase database
      await addDoc(collection(emailDb, "subscribers"), {
        email: email,
        timestamp: new Date().toISOString(),
        source: "AI + React Seminar Website",
        status: "subscribed"
      });

      console.log("✅ Email saved to Firebase:", email);

      toast({
        title: "Thank you for subscribing!",
        description: "You can now download the seminar materials.",
      });

      // Enable download buttons
      setEmailSubmitted(true);

      // Reset form state
      setEmail("");

    } catch (error) {
      console.error("❌ Error saving email to Firebase:", error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePPTDownload = () => {
    if (!emailSubmitted) return; // Prevent download if email not submitted

    setIsDownloadingPPT(true);
    setTimeout(() => {
      toast({
        title: "Presentation download started!",
        description: "Your PPTX file is being downloaded.",
      });
      const link = document.createElement("a");
      link.href = "/AI_TOOLS & REACT_WEB-COMPS.pptx";
      link.download = "AI_TOOLS & REACT_WEB-COMPS.pptx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloadingPPT(false);
    }, 800);
  };

  const handleWordDownload = () => {
    if (!emailSubmitted) return; // Prevent download if email not submitted

    setIsDownloadingDOC(true);
    setTimeout(() => {
      toast({
        title: "Document download started!",
        description: "Your Word document is being downloaded.",
      });
      const link = document.createElement("a");
      link.href = "/AI_TOOLS & REACT_WEB-COMPS.docx";
      link.download = "AI_REACT_SEMINAR_NOTES.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloadingDOC(false);
    }, 800);
  };

  return (
    <section id="newsletter" className="bg-white dark:bg-black py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* Header Chip */}
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                05
              </span>
              <span>Conclusion</span>
            </div>
          </div>

          <h2 className="text-5xl font-display font-bold mb-4 text-left text-gray-900 dark:text-white">
            Thank you for exploring AI + React!
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 text-left">
            Download the seminar slides and connect with us for more insights.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8"
          >
            <div className="relative flex-grow w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to unlock downloads"
                className="w-full px-6 py-4 rounded-full border border-pulse-500 dark:border-pulse-500 bg-white dark:bg-white focus:outline-none focus:ring-2 focus:ring-pulse-500 text-pulse-900 dark:text-pulse-900"
                required
                disabled={isSubmitting || emailSubmitted}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting || emailSubmitted}
                className={`bg-pulse-500 hover:bg-pulse-600 text-white text-lg py-4 px-8 rounded-full transition-all duration-300 flex-1 -mt-2 -mb-2 ${
                  isSubmitting || emailSubmitted ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {emailSubmitted ? "Submitted" : isSubmitting ? "Saving..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Additional Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handlePPTDownload}
              disabled={!emailSubmitted || isDownloadingPPT}
              className={`${
                emailSubmitted
                  ? "bg-pulse-500 hover:bg-pulse-600 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white text-lg py-4 px-8 rounded-full transition-all duration-300 flex-1 ${
                isDownloadingPPT ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isDownloadingPPT ? "Downloading..." : emailSubmitted ? "↓ PPTX" : "🔒 PPTX"}
            </button>

            <button
              onClick={handleWordDownload}
              disabled={!emailSubmitted || isDownloadingDOC}
              className={`${
                emailSubmitted 
                  ? "bg-pulse-500 hover:bg-pulse-600 cursor-pointer" 
                  : "bg-gray-400 cursor-not-allowed"
              } text-white text-lg py-4 px-8 rounded-full transition-all duration-300 flex-1 ${
                isDownloadingDOC ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isDownloadingDOC ? "Downloading..." : emailSubmitted ? "↓ DOCX" : "🔒 DOCX"}
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
            {emailSubmitted
              ? "Thank you! You can now download all seminar materials"
              : "Enter your email above to unlock seminar materials download"
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
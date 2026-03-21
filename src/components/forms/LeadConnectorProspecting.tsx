"use client";

import { useEffect, useRef } from "react";

/**
 * LeadConnectorProspecting Component
 * 
 * Embeds the GoHighLevel (LeadConnector) Prospecting Widget.
 * The widget script uses `document.currentScript` to inject the form UI
 * immediately before the script tag. Using a manual injection method
 * ensures it renders exactly where intended in the React component tree.
 */
export function LeadConnectorProspecting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we only run this once and on the client
    if (typeof window === "undefined" || !containerRef.current) return;

    // Remove any existing scripts/widgets to prevent duplicates on hot-reload
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
    script.setAttribute("data-widget-id", "69be35066e227057fc1d4542");
    script.async = true;
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[500px] flex flex-col items-center justify-center relative">
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[500px] prospecting-widget-container flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground font-medium animate-pulse">
            Initializing AI Audit Tool...
          </p>
        </div>
      </div>
      
      {/* Decorative background elements to match the Mirage Tech aesthetic */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}

"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  /** Instagram post or reel URL */
  url: string;
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    const win = window as unknown as Record<string, { Embeds: { process: () => void } }>;
    if (!win.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      win.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "100%",
      }}
    />
  );
}

interface InstagramFeedProps {
  /** Array of Instagram post/reel URLs to embed */
  urls: string[];
}

export function InstagramFeed({ urls }: InstagramFeedProps) {
  return (
    <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
      <div className="max-w-[1040px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Follow the Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Real leadership advice. Every week.
          </h2>
          <p className="mt-4 text-muted max-w-[560px] mx-auto leading-relaxed">
            Kai shares practical leadership tips, real-world scenarios and honest
            coaching insights on Instagram.
          </p>
          <a
            href="https://www.instagram.com/managing.difficult.people/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-navy font-medium hover:underline"
          >
            @managing.difficult.people &rarr;
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {urls.map((url) => (
            <InstagramEmbed key={url} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}

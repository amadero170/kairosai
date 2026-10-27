import React from "react";

// Cases are shown by solution and industry, without client names
export type CaseItem = {
  title: string;
  industry?: string;
  description: string;
  result?: string;
  status?: string;
};

// Case card: dark "screen" panel with the result (or status), then client details
export default function CaseCard({ item, resultLabel }: { item: CaseItem; resultLabel: string }) {
  return (
    <article className="h-full flex flex-col border border-line rounded-2xl overflow-hidden bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(30,30,40,0.4)]">
      <div className="relative aspect-[16/8] bg-[linear-gradient(150deg,#1d2430,#0d1117)] overflow-hidden flex items-end p-6 md:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(44,125,184,0.35),transparent_55%)]" />
        <div className="relative z-10 w-full">
          {item.result ? (
            <>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                {resultLabel}
              </span>
              <p className="font-display font-semibold text-white text-[clamp(22px,2.6vw,30px)] leading-tight tracking-[-0.02em] mt-2">
                {item.result}
              </p>
            </>
          ) : (
            item.status && (
              <span className="inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                <span className="w-2 h-2 rounded-full bg-ok animate-pulse" />
                {item.status}
              </span>
            )
          )}
        </div>
      </div>
      <div className="p-6 md:p-7">
        {item.industry && <span className="lbl !text-[11px] !tracking-[0.12em]">{item.industry}</span>}
        <h3 className="font-display text-xl font-semibold text-ink mt-1.5 mb-2.5">{item.title}</h3>
        <p className="font-light text-[15px] text-ink-2 leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}

import { Bot } from 'lucide-react';

export function AssistantLauncher({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open AI Assistant"
      className="fixed bottom-5 right-5 z-[80] flex items-center gap-3 rounded-2xl border border-cyan/30 bg-[#0b1018] px-4 py-3 text-sm font-semibold text-white shadow-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-[#111b28] sm:bottom-6 sm:right-6"
    >
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan text-ink"><Bot size={17} /></span>
      AI Assistant
    </button>
  );
}

import { useState, type FormEvent } from 'react';
import { Send, X } from 'lucide-react';

const quickQuestions = [
  'What does the platform do?',
  'How can it help my business?',
  'What features do you offer?',
  'How does pricing work?',
  'Book a free consultation',
];

function answerFor(question: string) {
  const normalized = question.toLowerCase();
  if (normalized.includes('pricing')) return 'Plans are shaped around the size and goals of your business. Choose a foundation, growth, or advanced plan, then talk with our team for a tailored recommendation.';
  if (normalized.includes('consultation')) return 'Absolutely. Share a few details through the contact form and our team will follow up to arrange a free visibility conversation.';
  if (normalized.includes('features')) return 'AIO Matrix brings website optimization, local SEO, AI search visibility, business profile insights, content tools, reputation support, and lead capture into one connected workspace.';
  if (normalized.includes('help')) return 'It helps your business become easier to find, easier to trust, and easier to choose wherever customers search, compare, and ask questions.';
  return 'AIO Matrix helps businesses strengthen their digital presence across websites, local search, reviews, business profiles, AI discovery, and customer conversations.';
}

type Message = { from: 'assistant' | 'user'; text: string };

export function Assistant({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'assistant', text: "Hi! I'm your AI business assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

  const ask = (question: string) => {
    if (!question.trim()) return;
    setMessages((current) => [...current, { from: 'user', text: question }, { from: 'assistant', text: answerFor(question) }]);
    setInput('');
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-6 sm:right-6">
      <div className="flex w-[min(360px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1018]/95 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/ChatGPT_Image_Aug_2,_2026,_11_51_44_PM.png" alt="AIO Matrix" width="1024" height="1024" decoding="async" className="h-8 w-auto rounded-lg object-contain" />
            <div><div className="text-sm font-semibold text-white">AI Assistant</div><div className="flex items-center gap-1 text-[11px] text-cyan"><span className="h-1.5 w-1.5 rounded-full bg-cyan" />Online</div></div>
          </div>
          <button onClick={onClose} aria-label="Close assistant" className="text-white/50 hover:text-white"><X size={18} /></button>
        </div>
        <div className="max-h-72 space-y-3 overflow-y-auto p-4">
          {messages.map((message, index) => <div key={`${message.text}-${index}`} className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.from === 'user' ? 'ml-auto bg-electric text-white' : 'bg-white/7 text-white/75'}`}>{message.text}</div>)}
          {messages.length === 1 && <div className="space-y-2 pt-1">{quickQuestions.map((question) => <button key={question} onClick={() => ask(question)} className="block w-full rounded-xl border border-white/10 px-3 py-2 text-left text-xs text-white/65 transition hover:border-cyan/40 hover:text-white">{question}</button>)}</div>}
        </div>
        <form onSubmit={submit} className="flex gap-2 border-t border-white/10 p-3"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." className="min-w-0 flex-1 rounded-xl bg-white/7 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30" aria-label="Ask the AI Assistant" /><button aria-label="Send question" className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan text-ink"><Send size={15} /></button></form>
      </div>
    </div>
  );
}

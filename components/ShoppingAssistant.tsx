"use client";

import { useState, type FormEvent } from "react";
import { contact } from "../content/site";

const suggestions = [
  { label: "Order now", value: "Hello Good & Glad, I would like to ask about placing an order. Could you help me with the next steps and current availability?" },
  { label: "Interested in this product", value: "Hello Good & Glad, I am interested in a product I saw on your website. Could I share it with you and learn more?" },
  { label: "Is this still available?", value: "Hello Good & Glad, is this item still available? I can share the product I have in mind." },
  { label: "Ask about pricing", value: "Hello Good & Glad, could you please share the current price for an item I am interested in?" },
  { label: "Help me choose", value: "Hello Good & Glad, I would appreciate help choosing a perfume, bag, shoes, or accessory. Could you tell me what is currently available?" },
];

export default function ShoppingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");

  function sendNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = note.trim();
    if (!message) return;
    const url = `https://wa.me/${contact.phoneForLink}?text=${encodeURIComponent(`Hello Good & Glad, ${message}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <aside className="assistant" aria-label="Shopping assistant">
      {isOpen && (
        <section className="assistant__panel" aria-labelledby="assistant-title">
          <div className="assistant__top">
            <div><span className="assistant__status" /> <span>GOOD &amp; GLAD CONCIERGE</span></div>
            <button className="assistant__close" type="button" onClick={() => setIsOpen(false)} aria-label="Close shopping assistant">×</button>
          </div>
          <h2 id="assistant-title">How can we help?</h2>
          <p className="assistant__intro">Choose a prompt or leave a note. We’ll open WhatsApp so you can ask us directly.</p>
          <div className="assistant__prompts" aria-label="Suggested questions">
            {suggestions.map((suggestion) => (
              <button key={suggestion.label} type="button" className={selectedPrompt === suggestion.value ? "is-selected" : ""} onClick={() => setSelectedPrompt(suggestion.value)}>
                {suggestion.label}<span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          {selectedPrompt && (
            <a className="assistant__send-prompt" href={`https://wa.me/${contact.phoneForLink}?text=${encodeURIComponent(selectedPrompt)}`} target="_blank" rel="noreferrer">Continue this inquiry <span aria-hidden="true">↗</span></a>
          )}
          <form className="assistant__form" onSubmit={sendNote}>
            <label htmlFor="assistant-note">Or write a note</label>
            <textarea id="assistant-note" rows={3} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Tell us the product or details you have in mind…" />
            <button type="submit" disabled={!note.trim()}>Send your note on WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
          <p className="assistant__fineprint">This front-end assistant cannot view live stock or prices. Our team will confirm those with you.</p>
        </section>
      )}
      <button className="assistant__launcher" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}>
        <span className="assistant__spark" aria-hidden="true">✳</span>{isOpen ? "Close assistant" : "Ask our concierge"}
      </button>
    </aside>
  );
}

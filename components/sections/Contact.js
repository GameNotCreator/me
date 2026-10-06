"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowUpRight, Send } from "lucide-react";
import { useSectionInView } from "@/libs/hooks";
import { sendEmail } from "@/actions/SendEmail";

function SendButton() {
  const { pending } = useFormStatus();
  return <button type="submit" className="button button-primary" disabled={pending}>{pending ? "Sending…" : "Send message"}<Send size={15} /></button>;
}
export default function Contact() {
  const { ref } = useSectionInView("contact", 0.2);
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section id="contact" ref={ref} className="contact-section section-space page-width">
      <div className="contact-copy">
        <p className="eyebrow">Have something in mind?</p>
        <h2 className="section-title">Let&apos;s build <em>something.</em></h2>
        <p>If you want to talk about a project, a collaboration, or something I am working on, I would love to hear from you.</p>
        <a className="text-link contact-email" href="mailto:hedi_fourati@icloud.com">hedi_fourati@icloud.com <ArrowUpRight size={16} /></a>
      </div>
      <form className="contact-form" action={async (formData) => {
        setResult(null);
        try {
          const response = await sendEmail(formData);
          setResult(response.error ? { error: true, message: response.error } : { error: false, message: "Thanks! Your message has been sent." });
          if (!response.error) { setEmail(""); setMessage(""); }
        } catch {
          setResult({ error: true, message: "Your message could not be sent. Please email me directly." });
        }
      }}>
        <label htmlFor="sender-email">Your email</label>
        <input id="sender-email" name="senderEmail" type="email" autoComplete="email" required maxLength={500} placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" required maxLength={5000} placeholder="Tell me a little about your idea…" value={message} onChange={(event) => setMessage(event.target.value)} />
        <SendButton />
        <p className="form-message" role={result?.error ? "alert" : "status"} data-error={result?.error || false}>{result?.message}</p>
      </form>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { useSectionInView } from "@/libs/hooks";
import { sendEmail } from "@/actions/SendEmail";

function SendButton() {
  const { pending } = useFormStatus();
  const reduceMotion = useReducedMotion();
  return <motion.button type="submit" className="button button-primary" disabled={pending} whileTap={reduceMotion || pending ? undefined : { scale: 0.97 }}>{pending ? "Sending…" : "Send message"}<Send size={16} aria-hidden="true" /></motion.button>;
}

export default function Contact() {
  const { ref } = useSectionInView("contact", 0.2);
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section id="contact" ref={ref} className="contact-section portfolio-section">
      <h2 className="section-title">Hit me up!</h2>
      <p className="section-copy">Please contact me directly at <a href="mailto:hedi_fourati@icloud.com">hedi_fourati@icloud.com</a> or through this form.</p>
      <form className="contact-form" action={async (formData) => {
        const submittedEmail = formData.get("senderEmail");
        const submittedMessage = formData.get("message");
        setResult(null);
        try {
          const response = await sendEmail(formData);
          setResult(response.error ? { error: true, message: response.error } : { error: false, message: "Thanks! Your message has been sent." });
          if (!response.error) {
            setEmail((current) => current === submittedEmail ? "" : current);
            setMessage((current) => current === submittedMessage ? "" : current);
          }
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

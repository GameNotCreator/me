"use server";

import React from "react";
import { Resend } from "resend";
import ContactForm from "@/components/elements/ContactForm";
import { getErrorMessage, validateString } from "@/libs/utils";

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000) || !message.trim()) {
    return {
      error: "Invalid message",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return { error: "The contact form is currently unavailable. Please email hedi_fourati@icloud.com directly." };
  }

  let data;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["hedi_fourati@icloud.com"],
      subject: "Message from contact form | PORTFOLIO",
      replyTo: senderEmail,
      react: React.createElement(ContactForm, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    if (result.error) {
      return { error: "Your message could not be sent. Please email hedi_fourati@icloud.com directly." };
    }
    data = result.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

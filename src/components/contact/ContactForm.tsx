"use client";

import { useState } from "react";

import GlowCard from "@/components/ui/GlowCard";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);
  setError("");

  try {
    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website,
        }),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      console.log(data);

throw new Error(
  JSON.stringify(data, null, 2)
);
    }

    setSuccess(true);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setWebsite("");

  } catch (error) {

    setError(
      error instanceof Error
        ? error.message
        : "Unexpected error occurred"
    );

  } finally {

    setLoading(false);

  }
}

  return (
    <GlowCard className="p-8">
      <h2 className="text-3xl font-bold text-fg">
        Send a Message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          className="
            w-full
            rounded-xl
            bg-page
            border
            border-hairline
            p-4
            focus:outline-none
            focus:border-cyan-500
          "
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          className="
            w-full
            rounded-xl
            bg-page
            border
            border-hairline
            p-4
            focus:outline-none
            focus:border-cyan-500
          "
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          required
          className="
            w-full
            rounded-xl
            bg-page
            border
            border-hairline
            p-4
            focus:outline-none
            focus:border-cyan-500
          "
        />

        <textarea
          rows={6}
          placeholder="Message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          required
          className="
            w-full
            rounded-xl
            bg-page
            border
            border-hairline
            p-4
            focus:outline-none
            focus:border-cyan-500
          "
        />

        {/* Honeypot Field */}
        <input
          type="text"
          value={website}
          onChange={(e) =>
            setWebsite(e.target.value)
          }
          className="hidden"
          autoComplete="off"
          tabIndex={-1}
        />

        <button
          type="submit"
          disabled={loading}
          className="
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:bg-cyan-400
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>

        {success && (
  <div
    className="
      rounded-xl
      border
      border-green-500/20
      bg-green-500/10
      p-4
      text-green-400
    "
  >
    Thank you for reaching out.
    Your message has been delivered.
  </div>
)}

        {error && (
  <div
    className="
      rounded-xl
      border
      border-red-500/20
      bg-red-500/10
      p-4
      text-red-400
    "
  >
    {error}
  </div>
)}
      </form>
    </GlowCard>
  );
}
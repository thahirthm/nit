"use client";

import { FormEvent, useState } from "react";
import type { FormResult } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Shared submit/feedback state for the API-backed forms. `submit` receives the form
 * element; on success the form is reset. Field errors come back from the API keyed by
 * input `name` and are cleared as soon as the user edits that field.
 */
export function useApiForm(submit: (form: HTMLFormElement) => Promise<FormResult>, onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    setStatus("submitting");
    setMessage("");
    setErrors({});

    const result = await submit(form);
    setStatus(result.ok ? "success" : "error");
    setMessage(result.message);
    setErrors(result.errors);
    if (result.ok) {
      form.reset();
      onSuccess?.();
    }
  };

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name;
    if (status === "success") setStatus("idle");
    setErrors((prev) => {
      if (!name || !prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  /** First API message for a field, shown under the matching input. */
  const fieldError = (name: string) => errors[name]?.[0];

  return { status, message, fieldError, onSubmit, onChange, submitting: status === "submitting" };
}

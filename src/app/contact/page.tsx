"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import { Loader2, Check } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSent(true);
  };

  const inputCls =
    "h-12 w-full border-b bg-transparent px-1 text-text-primary placeholder:text-text-secondary/50 focus:outline-none transition-colors";
  const errCls = (e?: { message?: string }) =>
    `${inputCls} ${e ? "border-accent-alt animate-[shake_0.4s]" : "border-border focus:border-accent"}`;

  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            Contact · Available for projects
          </div>
          <h1 className="font-display text-[12vw] font-bold leading-[0.95] tracking-tighter md:text-[8vw] lg:text-[120px]">
            {"Let's talk.".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + i * 0.04,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block whitespace-pre"
              >
                {c}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-[3fr_2fr] md:gap-24">
          <Reveal>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  className="flex min-h-[400px] flex-col items-start justify-center"
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-accent/20">
                    <Check className="size-8 text-accent" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl">Got it.</h2>
                  <p className="mt-4 text-text-secondary md:text-lg">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ x: -40, opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-10"
                  noValidate
                >
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      className={errCls(errors.name)}
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      {...register("company")}
                      className={errCls(errors.company)}
                      placeholder="Optional"
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register("email")}
                      className={errCls(errors.email)}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Budget" error={errors.budget?.message}>
                    <select
                      {...register("budget")}
                      className={errCls(errors.budget)}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-bg">
                        Select a range
                      </option>
                      {[
                        "Under $5,000",
                        "$5,000 – $15,000",
                        "$15,000 – $50,000",
                        "$50,000+",
                        "Not sure yet",
                      ].map((b) => (
                        <option key={b} value={b} className="bg-bg">
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Project Description" error={errors.description?.message}>
                    <textarea
                      {...register("description")}
                      rows={5}
                      className={`${errCls(errors.description)} resize-none py-3 leading-relaxed`}
                      style={{ height: "auto" }}
                      placeholder="What are you building? What's the goal?"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex h-14 items-center gap-3 rounded-full bg-accent px-10 font-mono text-xs uppercase tracking-[0.2em] text-white disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Sending
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-10 md:pl-12">
              <Info label="Email">
                <a className="hover:text-accent" href="mailto:hello@arcverse.com">
                  hello@arcverse.com
                </a>
              </Info>
              <Info label="Based in">Dhaka, Bangladesh</Info>
              <Info label="Status">
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  Available for projects
                </span>
              </Info>
              <Info label="Social">
                <div className="flex flex-wrap gap-4 text-text-secondary">
                  {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
                    <a key={s} href="#" className="hover:text-accent">
                      {s}
                    </a>
                  ))}
                </div>
              </Info>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`@keyframes shake { 10%,90%{transform:translateX(-1px)} 20%,80%{transform:translateX(2px)} 30%,50%,70%{transform:translateX(-3px)} 40%,60%{transform:translateX(3px)} }`}</style>
    </>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  budget: z.string().min(1, "Pick a range"),
  description: z.string().trim().min(20, "Tell us a bit more (min 20 chars)").max(2000),
});
type FormData = z.infer<typeof schema>;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary">
        {label}
      </div>
      {children}
      {error && (
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-alt">
          {error}
        </div>
      )}
    </label>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary">
        {label}
      </div>
      <div className="mt-2 text-lg">{children}</div>
    </div>
  );
}

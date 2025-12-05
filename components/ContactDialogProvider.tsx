'use client';

import { createContext, useContext, useRef, useState, type ReactNode, type FormEvent } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { gsap } from '../animations/gsapConfig';

interface ContactDialogContextValue {
  open: () => void;
  close: () => void;
}

const ContactDialogContext = createContext<ContactDialogContextValue | undefined>(undefined);

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error('useContactDialog must be used within a ContactDialogProvider');
  }
  return ctx;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ContactDialogContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <ContactDialog onClose={close} />}
    </ContactDialogContext.Provider>
  );
}

interface ContactDialogProps {
  onClose: () => void;
}

function ContactDialog({ onClose }: ContactDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!overlayRef.current || !dialogRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(dialogRef.current, { y: 40, opacity: 0 });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });

      gsap.to(dialogRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out',
      });
    }, dialogRef);

    return () => ctx.revert();
  }, []);

  const handleCloseClick = () => {
    if (!overlayRef.current || !dialogRef.current) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(dialogRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
    });

    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.2,
        ease: 'power1.in',
      },
      '<'
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatusMessage('Message sent successfully. I will get back to you soon.');
      form.reset();
    } catch (err) {
      setStatusMessage('Unable to send message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg mx-4 rounded-3xl border border-neutral-800 bg-black/95 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
      >
        <button
          type="button"
          onClick={handleCloseClick}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-100 text-sm"
          aria-label="Close contact dialog"
        >
          X
        </button>
        <div className="px-6 pt-7 pb-6 md:px-8 md:pt-8 md:pb-7">
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-neutral-800" />
          <h2 className="text-center text-xl md:text-2xl font-bold tracking-[0.25em] text-neutral-100 uppercase [font-family:var(--font-orbitron)]">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mt-3 text-center text-xs md:text-sm text-neutral-400 max-w-md mx-auto">
            Turn your vision into reality with a partner who truly understands what your business needs.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-sm">
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-2xl border border-neutral-600 bg-black px-3 py-2.5 text-sm outline-none focus:border-neutral-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-2xl border border-neutral-600 bg-black px-3 py-2.5 text-sm outline-none focus:border-neutral-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                Message
              </label>
              <textarea
                name="message"
                className="w-full min-h-[140px] rounded-2xl border border-neutral-600 bg-black px-3 py-2.5 text-sm resize-none outline-none focus:border-neutral-300"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-neutral-700 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-100 bg-[length:200%_100%] px-4 py-2.5 text-xs md:text-sm font-semibold text-black disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send a message'}
            </button>
            {statusMessage && (
              <p className="mt-2 text-[0.7rem] text-center text-neutral-400">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

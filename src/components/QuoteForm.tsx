import { useState, type FormEvent } from 'react';
import { PRODUCT_SERVICE_OPTIONS, FAQS } from '@/data/content';
import { CheckCircle2, ChevronDown, Send, Upload, FileText } from 'lucide-react';

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  requirements: string;
  fileName: string;
};

const INITIAL: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  requirements: '',
  fileName: '',
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.company.trim()) next.company = 'Please enter your company name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.product) next.product = 'Please select a product or service.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setForm(INITIAL);
    setSubmitted(false);
  };

  return (
    <section id="quote" className="section-pad relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div>
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent-400" />
                Request a Quote
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                Request a Manufacturing Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel-300">
                Share your requirement and our team will respond within one business day
                with a detailed quotation.
              </p>
            </div>

            {submitted ? (
              <div className="reveal mt-8 flex flex-col items-center justify-center rounded-2xl border border-accent-500/30 bg-accent-500/5 p-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-white">
                  Request Received
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel-200">
                  Thank you, {form.fullName.split(' ')[0] || 'there'}. Our engineering team
                  will review your requirement and respond within one business day.
                </p>
                <button type="button" onClick={reset} className="btn-outline mt-7">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="reveal mt-8 space-y-5" data-reveal-delay="80">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="label-field">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className="input-field"
                      placeholder="Your full name"
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-accent-400">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="label-field">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className="input-field"
                      placeholder="Company name"
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="mt-1 text-xs text-accent-400">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="label-field">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="input-field"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1 text-xs text-accent-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-field">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="input-field"
                      placeholder="+91 00000 00000"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-accent-400">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="product" className="label-field">Product / Service *</label>
                    <select
                      id="product"
                      value={form.product}
                      onChange={(e) => update('product', e.target.value)}
                      className="input-field appearance-none"
                      aria-invalid={!!errors.product}
                    >
                      <option value="">Select a product</option>
                      {PRODUCT_SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-900">{opt}</option>
                      ))}
                    </select>
                    {errors.product && <p className="mt-1 text-xs text-accent-400">{errors.product}</p>}
                  </div>
                  <div>
                    <label htmlFor="quantity" className="label-field">Quantity</label>
                    <input
                      id="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={(e) => update('quantity', e.target.value)}
                      className="input-field"
                      placeholder="e.g. 500 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="label-field">Requirements</label>
                  <textarea
                    id="requirements"
                    rows={4}
                    value={form.requirements}
                    onChange={(e) => update('requirements', e.target.value)}
                    className="input-field resize-none"
                    placeholder="Material, tolerances, finish, timeline, delivery location..."
                  />
                </div>

                <div>
                  <span className="label-field">Upload Drawing / PDF</span>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-white/15 bg-navy-900/60 px-4 py-4 transition-colors hover:border-accent-400/50 hover:bg-navy-900/90">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-500/10 text-accent-400">
                      {form.fileName ? <FileText className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
                    </span>
                    <span className="flex-1 text-sm text-steel-200">
                      {form.fileName || 'Click to upload a drawing or PDF (optional)'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.png,.jpg,.jpeg"
                      className="sr-only"
                      onChange={(e) => update('fileName', e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full group">
                  <Send className="h-4 w-4" />
                  Request Manufacturing Quote
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div className="lg:pt-28">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent-400" />
                Frequently Asked Questions
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
                Quick Answers
              </h2>
            </div>

            <div className="reveal mt-8 space-y-3" data-reveal-delay="80">
              {FAQS.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                      open ? 'border-accent-400/40 bg-white/5' : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent-400 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-steel-300">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

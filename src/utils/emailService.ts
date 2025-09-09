// src/utils/emailService.ts
const EMAILJS_SERVICE_ID = 'service_443nrbl';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_64x5fkl';
const EMAILJS_TEMPLATE_ID_QUOTE = 'template_avtjqpc';
const EMAILJS_PUBLIC_KEY = 'JjaSthaNM6zWKYrIk';

async function getEmailJS() {
  if (typeof window === 'undefined') {
    return null; // On est en SSR/SSG → on ne fait rien
  }
  const mod = await import('@emailjs/browser');
  const emailjs = mod.default;
  try { emailjs.init(EMAILJS_PUBLIC_KEY); } catch {}
  return emailjs;
}

export interface QuoteFormData {
  name: string; email: string; phone: string; address: string;
  service: string; urgency: string; message?: string;
}

export async function sendQuoteEmail(formData: QuoteFormData) {
  const emailjs = await getEmailJS();
  if (!emailjs) return { status: 'skipped' as const };

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    address: formData.address,
    service_type: formData.service,
    urgency: formData.urgency,
    message: formData.message ?? '',
    to_email: 'fkrmultiservices@gmail.com',
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_QUOTE, templateParams);
}

export interface ContactFormData {
  name: string; email: string; phone: string; service: string; message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const emailjs = await getEmailJS();
  if (!emailjs) return { status: 'skipped' as const };

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service_type: formData.service,
    message: formData.message,
    to_email: 'fkrmultiservices@gmail.com',
  };

  return emailjs.send(EMAILJS_SERVICE_ID, 'template_64x5fkl', templateParams);
}
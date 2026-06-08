import type { ContactFormData } from '@/types/contact-form.types';

async function sendToN8N(data: ContactFormData) {
  const webhookUrl = process.env.N8N_WEBHOOK;

  if (!webhookUrl) {
    throw new Error('N8N_WEBHOOK is not defined');
  }

  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function POST(req: Request) {
  const data = await req.json();

  await sendToN8N(data);

  return Response.json({
    success: true,
  });
}

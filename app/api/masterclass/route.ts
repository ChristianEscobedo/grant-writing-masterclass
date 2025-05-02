import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/FnedsjhvL9EqG9Eyjhep/webhook-trigger/470a1a86-120c-41c1-95c6-be3f15290166';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('Masterclass registration:', data);

    // Send data to the webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        interest: data.interest,
        event: 'Grant Writing Masterclass',
        date: 'May 3rd, 2024',
        time: '2:00 PM EST',
      }),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook error:', await webhookResponse.text());
      throw new Error('Failed to send data to webhook');
    }

    return NextResponse.json({
      success: true,
      message: 'Registration successful'
    });
  } catch (error) {
    console.error('Error processing masterclass registration:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process registration' },
      { status: 500 }
    );
  }
}

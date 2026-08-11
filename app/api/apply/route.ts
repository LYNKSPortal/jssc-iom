import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      name,
      address,
      telephone,
      email,
      hmService,
      branch,
      serviceNumber,
      emergencyService,
      position,
      staffNumber,
      contactTel,
      contactEmail,
      contactFacebook,
      reason,
      fullMembership,
      payAsYouGo,
      photoConsent,
    } = data;

    if (!name || !address || !telephone || !email || !fullMembership || !payAsYouGo || !photoConsent) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const contactPreferences = [
      contactTel ? 'Tel No' : null,
      contactEmail ? 'Email' : null,
      contactFacebook ? 'Facebook' : null,
    ].filter(Boolean).join(', ') || 'None specified';

    const lines = [
      'General Information',
      `Name: ${name}`,
      `Address: ${address}`,
      `Telephone: ${telephone}`,
      `Email: ${email}`,
      '',
      'HM Forces / Veterans',
      hmService ? `Service: ${hmService}` : null,
      branch ? `Branch / Trade: ${branch}` : null,
      serviceNumber ? `Service Number: ${serviceNumber}` : null,
      '',
      'Emergency Services',
      emergencyService ? `Service: ${emergencyService}` : null,
      position ? `Position: ${position}` : null,
      staffNumber ? `Staff Number: ${staffNumber}` : null,
      '',
      `Preferred Contact Method: ${contactPreferences}`,
      '',
      reason ? `Reason for Application: ${reason}` : null,
      '',
      'Membership Options',
      `Full Membership (£60): ${fullMembership}`,
      `Pay As You Go: ${payAsYouGo}`,
      '',
      `Photo Consent: ${photoConsent}`,
    ].filter((line) => line !== null);

    await sendMail({
      subject: `[JSSC Membership Application] ${name}`,
      text: lines.join('\n'),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission failed:', error);
    const detail = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Failed to submit application.', detail }, { status: 500 });
  }
}

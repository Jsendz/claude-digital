// Run in Supabase SQL editor: ALTER TABLE audit_requests ADD COLUMN IF NOT EXISTS frustration text;
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nombre, email, websiteUrl, frustration } = await req.json();

    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('audit_requests')
      .insert([{
        nombre,
        email,
        website_url: websiteUrl || null,
        frustration: frustration || null,
      }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Error al guardar' },
        { status: 500 }
      );
    }

    // 2. Notify you
    await resend.emails.send({
      from: 'Lumiq <onboarding@resend.dev>',
      to: 'info@lumiqstudios.com', // <-- replace with your real email
      subject: `Nueva solicitud de auditoría — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16232A;">Nueva solicitud de Spotlight Audit</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Web:</strong> ${websiteUrl || 'No tiene web todavía'}</p>
          ${frustration ? `<p><strong>Frustración principal:</strong> ${frustration}</p>` : ''}
          <hr/>
          <p style="color: #666; font-size: 12px;">
            Recuerda grabar el Loom en las próximas 48h y responder a ${email}
          </p>
        </div>
      `,
    });

    // 3. Confirmation to the lead
    await resend.emails.send({
      from: 'Lumiq <onboarding@resend.dev>',
      to: email,
      subject: 'Hemos recibido tu solicitud — Lumiq',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16232A;">Hola ${nombre},</h2>
          <p>Gracias por tu solicitud.</p>
          <p>Voy a revisar tu web personalmente y te enviaré un PDF con los puntos
          clave que estén frenando tu visibilidad online — en menos de 24 horas.</p>
          <p>Mientras tanto, si quieres adelantar una llamada puedes reservar aquí:</p>
          <p>
            <a href="TU_LINK_CAL"
               style="background: #FF5B04; color: white; padding: 12px 24px;
                      text-decoration: none; border-radius: 6px; display: inline-block;">
              Reservar llamada →
            </a>
          </p>
          <p style="color: #666; margin-top: 32px;">
            Hablamos pronto,<br/>
            <strong>Lumiq</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    );
  }
}

import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Variable para almacenar el transportador (FORZANDO DEPLOYMENT)
let transporter = null;

// Función para obtener el transportador (solo se ejecuta en runtime)
function getTransporter() {
  if (!transporter) {
    // Verificar que las variables de entorno estén disponibles
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Variables de entorno EMAIL_USER y EMAIL_PASS no están configuradas');
    }
    
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return transporter;
}

// Función para enviar email con el plan de nutrición
export async function sendNutritionPlanEmail(formData) {
  try {
    const emailTransporter = getTransporter();

    // Configuración para adjunto/enlace
    const emailAttachPdf = String(process.env.EMAIL_ATTACH_PDF ?? 'true').toLowerCase() !== 'false';
    // Resolver ruta del PDF: validar y hacer fallback a public/plan-nutricional.pdf
    function resolvePdfPath() {
      const envPathRaw = process.env.PLAN_PDF_PATH || '';
      let filePath = envPathRaw;
      // Soportar rutas con prefijo file://
      if (filePath.startsWith('file://')) {
        try {
          const url = new URL(filePath);
          filePath = url.pathname;
          if (process.platform === 'win32' && filePath.startsWith('/')) {
            filePath = filePath.slice(1);
          }
          filePath = decodeURIComponent(filePath);
        } catch {}
      }
      // Si no existe, usar public/plan-nutricional.pdf
      try {
        if (filePath && fs.existsSync(filePath)) {
          return filePath;
        }
      } catch {}
      const fallback = path.join(process.cwd(), 'public', 'plan-nutricional.pdf');
      return fallback;
    }
    const planPdfPath = resolvePdfPath();
    const planPdfUrl = process.env.PLAN_PDF_URL; // opcional

    // Plantilla del email con soporte de enlace
    const whatsappLink = `https://wa.me/526145502199?text=${encodeURIComponent('Hola, vi mi plan nutricional. Me gustaría más información 😊')}`;
    const buildHtml = ({ linkOnly }) => {
      const pdfParagraph = linkOnly
        ? `<p style="color: #555; line-height: 1.7; margin-bottom: 16px; font-size: 16px;">📎 Para ver tu semana de prueba, descárgala aquí: ${planPdfUrl ? `<a href="${planPdfUrl}" target="_blank" rel="noopener">Descargar PDF</a>` : 'contacta con nosotros para recibir el PDF.'}</p>`
        : `<p style="color: #555; line-height: 1.7; margin-bottom: 16px; font-size: 16px;">📎 El PDF de tu semana de prueba viene adjunto en este correo.</p>`;

      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9;">
          <div style="background-color: #5dc0b3; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🏥 Clinikids Cuu</h1>
            <p style="color: white; margin: 8px 0 0 0; font-size: 16px;">Pediatría Integral</p>
          </div>
          <div style="padding: 30px; background-color: white; margin: 0 20px;">
            <h2 style="color: #333; margin-bottom: 25px; font-size: 24px;">Hola, mamá 💕</h2>
            <p style="color: #555; line-height: 1.7; margin-bottom: 16px; font-size: 16px;">
              En <strong style=\"color:#5dc0b3;\">CliniKids</strong> queremos acompañarte en el cuidado de la salud de tus peques. Por eso te
              compartimos una <strong>semana de prueba gratuita</strong> de nuestro <strong>plan nutricional</strong>, elaborado por nuestro
              equipo de pediatras y nutriólogas.
            </p>
            ${pdfParagraph}
            <p style="color: #555; line-height: 1.7; margin-bottom: 16px; font-size: 16px;">
              👉 Recuerda que esta es solamente una prueba gratuita y tu experiencia será muy valiosa para ayudarnos a mejorar y
              ofrecerte cada vez más beneficios.
            </p>
            <p style="color: #555; line-height: 1.7; margin-bottom: 10px; font-size: 16px;">
              📱 Antes de comenzar, te pedimos que por favor te unas a nuestro grupo de WhatsApp para recibir recordatorios, tips y
              resolver tus dudas:
            </p>
            <div style="text-align: center; margin: 18px 0 26px 0;">
              <a href="${whatsappLink}" target="_blank" style="display: inline-block; background-color: #25D366; color: white; text-decoration: none; padding: 12px 18px; border-radius: 8px; font-weight: bold;">
                Unirme al grupo de WhatsApp
              </a>
              <div style="margin-top:8px; color:#666; font-size:14px;">o envía mensaje al <strong>614 550 2199</strong></div>
            </div>
            <p style="color: #555; line-height: 1.7; margin-bottom: 22px; font-size: 16px;">
              ¡Gracias por ser parte de <strong style=\"color:#5dc0b3;\">CliniKids</strong>! 💚
            </p>
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #5dc0b3; font-size: 18px; font-weight: bold; margin: 0;">Con cariño,</p>
              <p style="color: #5dc0b3; font-size: 16px; margin: 5px 0 0 0;">El equipo de CliniKids</p>
            </div>
          </div>
          <div style="background-color: #333; padding: 20px; text-align: center; margin: 0 20px; border-radius: 0 0 10px 10px;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 Clinikids Cuu Pediatría Integral. Todos los derechos reservados.
            </p>
          </div>
        </div>
      `;
    };

    // Opciones base del email
    const baseOptions = {
      from: process.env.EMAIL_USER,
      to: formData.emailMadre,
      subject: '🌟 Tu plan de alimentación semanal gratuito ya está aquí',
    };

    // Intento principal (con adjunto si está habilitado)
    let mailOptions = {
      ...baseOptions,
      html: buildHtml({ linkOnly: !emailAttachPdf }),
      attachments: [],
    };
    if (emailAttachPdf) {
      mailOptions.attachments = [
        { filename: 'plan-nutricional.pdf', path: planPdfPath, contentType: 'application/pdf' }
      ];
    }

    try {
      const info = await emailTransporter.sendMail(mailOptions);
      console.log('Email enviado:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (err) {
      const isSizeLimit = (err && (err.responseCode === 552 || String(err.response || '').includes('5.3.4')));
      if (isSizeLimit) {
        try {
          console.warn('Reintentando envío sin adjunto por límite de tamaño o fallo con adjunto');
          const info2 = await emailTransporter.sendMail({
            ...baseOptions,
            html: buildHtml({ linkOnly: true }),
          });
          console.log('Email enviado (fallback sin adjunto):', info2.messageId);
          return { success: true, messageId: info2.messageId, fallback: true };
        } catch (err2) {
          console.error('Fallo envío fallback sin adjunto:', err2);
          throw new Error('No se pudo enviar el email');
        }
      }
      console.error('Error al enviar email:', err);
      throw new Error('No se pudo enviar el email');
    }
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('No se pudo enviar el email');
  }
}

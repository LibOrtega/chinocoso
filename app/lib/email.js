import nodemailer from 'nodemailer';

// Variable para almacenar el transportador
let transporter = null;

// Función para obtener el transportador (solo se ejecuta en runtime)
function getTransporter() {
  if (!transporter) {
    // Verificar que las variables de entorno estén disponibles
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Variables de entorno EMAIL_USER y EMAIL_PASS no están configuradas');
    }
    
    transporter = nodemailer.createTransporter({
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
    // Obtener el transportador
    const emailTransporter = getTransporter();
    
    // Plantilla del email personalizada
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.emailMadre,
      subject: '🌟 Tu plan de alimentación semanal gratuito ya está aquí',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9;">
          <!-- Header con logo -->
          <div style="background-color: #5dc0b3; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🏥 Clinikids Cuu</h1>
            <p style="color: white; margin: 8px 0 0 0; font-size: 16px;">Pediatría Integral</p>
          </div>
          
          <!-- Contenido principal -->
          <div style="padding: 30px; background-color: white; margin: 0 20px;">
            <h2 style="color: #333; margin-bottom: 25px; font-size: 24px;">Hola mamá 👩‍👧‍👦</h2>
            
            <p style="color: #555; line-height: 1.7; margin-bottom: 20px; font-size: 16px;">
              De parte de <strong style="color: #5dc0b3;">Clinikids</strong>, queremos agradecerte por tu interés y confianza. 🙌
            </p>
            
            <p style="color: #555; line-height: 1.7; margin-bottom: 20px; font-size: 16px;">
              Tal como lo solicitaste, te compartimos tu <strong style="color: #5dc0b3;">prueba gratuita del plan de alimentación semanal</strong>, diseñado especialmente para apoyar el bienestar y la nutrición de tu peque.
            </p>
            
            <!-- Caja destacada -->
            <div style="background-color: #f0f9ff; border: 2px solid #5dc0b3; padding: 20px; border-radius: 10px; margin: 25px 0; text-align: center;">
              <p style="color: #5dc0b3; font-size: 18px; font-weight: bold; margin: 0;">
                👉 En este correo encontrarás adjunto el PDF con el plan de alimentación, para que lo tengas siempre a la mano.
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.7; margin-bottom: 25px; font-size: 16px;">
              Recuerda que en <strong style="color: #5dc0b3;">Clinikids</strong> trabajamos todos los días para acompañarte en el desarrollo saludable de tu hijo. Si tienes dudas o quieres más información, no dudes en ponerte en contacto con nosotros:
            </p>
            
            <!-- Información de contacto -->
            <div style="background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin: 25px 0;">
              <div style="margin-bottom: 15px;">
                <span style="color: #5dc0b3; font-size: 18px; margin-right: 10px;">📍</span>
                <span style="color: #333; font-size: 16px;">Blas Cano de los Ríos 807, San Felipe I, Chihuahua, Chih. México</span>
              </div>
              <div style="margin-bottom: 15px;">
                <span style="color: #5dc0b3; font-size: 18px; margin-right: 10px;">📞</span>
                <span style="color: #333; font-size: 16px;">(614) 550 2199</span>
              </div>
              <div>
                <span style="color: #5dc0b3; font-size: 18px; margin-right: 10px;">🌐</span>
                <span style="color: #333; font-size: 16px;">www.clinikidscuu.com</span>
              </div>
            </div>
            
            <p style="color: #555; line-height: 1.7; margin-bottom: 25px; font-size: 16px;">
              Gracias por ser parte de la familia <strong style="color: #5dc0b3;">Clinikids</strong> 💙
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #5dc0b3; font-size: 18px; font-weight: bold; margin: 0;">Con cariño,</p>
              <p style="color: #5dc0b3; font-size: 16px; margin: 5px 0 0 0;">El equipo Clinikids</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #333; padding: 20px; text-align: center; margin: 0 20px; border-radius: 0 0 10px 10px;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 Clinikids Cuu Pediatría Integral. Todos los derechos reservados.
            </p>
          </div>
        </div>
      `
    };

    // Enviar el email
    const info = await emailTransporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
    
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('No se pudo enviar el email');
  }
}

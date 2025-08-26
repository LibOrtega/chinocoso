import nodemailer from 'nodemailer';

// Configuración del transportador de email
const transporter = nodemailer.createTransporter({
  service: 'gmail', // o 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Tu email
    pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación
  }
});

// Función para enviar email con el plan de nutrición
export async function sendNutritionPlanEmail(formData) {
  try {
    // Plantilla del email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.emailMadre,
      subject: '¡Tu Plan de Nutrición Gratuito de 1 Semana - Clinikids Cuu!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #5dc0b3; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🥗 Clinikids Cuu</h1>
            <p style="color: white; margin: 10px 0 0 0;">Pediatría Integral</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px;">¡Hola ${formData.nombreMadre}! 👋</h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Gracias por tu interés en nuestro <strong>Plan de Nutrición Personalizado</strong> para ${formData.nombreNino}.
            </p>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">🎁 ¡Tu Plan Gratuito de 1 Semana!</h3>
              <p style="color: #856404; margin-bottom: 0;">
                Como prometimos, aquí tienes tu plan de nutrición gratuito para empezar a mejorar la alimentación de ${formData.nombreNino}.
              </p>
            </div>
            
            <h3 style="color: #5dc0b3; margin-top: 30px;">📋 Plan de Nutrición Semanal</h3>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5dc0b3;">
              <h4 style="color: #333; margin-top: 0;">Lunes - Día 1</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Avena con frutas y leche</li>
                <li><strong>Refrigerio:</strong> Manzana con mantequilla de almendras</li>
                <li><strong>Almuerzo:</strong> Pollo a la plancha con arroz y verduras</li>
                <li><strong>Refrigerio:</strong> Yogur griego con granola</li>
                <li><strong>Cena:</strong> Sopa de verduras con pan integral</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f3994d;">
              <h4 style="color: #333; margin-top: 0;">Martes - Día 2</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Huevos revueltos con pan integral</li>
                <li><strong>Refrigerio:</strong> Plátano con miel</li>
                <li><strong>Almuerzo:</strong> Pescado al horno con papas y ensalada</li>
                <li><strong>Refrigerio:</strong> Queso cottage con frutas</li>
                <li><strong>Cena:</strong> Pasta integral con salsa de tomate y carne molida</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5dc0b3;">
              <h4 style="color: #333; margin-top: 0;">Miércoles - Día 3</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Smoothie de frutas con leche</li>
                <li><strong>Refrigerio:</strong> Naranja y nueces</li>
                <li><strong>Almuerzo:</strong> Carne asada con frijoles y arroz</li>
                <li><strong>Refrigerio:</strong> Palomitas de maíz caseras</li>
                <li><strong>Cena:</strong> Enchiladas de pollo con guacamole</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f3994d;">
              <h4 style="color: #333; margin-top: 0;">Jueves - Día 4</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Panqueques integrales con miel</li>
                <li><strong>Refrigerio:</strong> Uvas y queso</li>
                <li><strong>Almuerzo:</strong> Pavo con puré de papas y brócoli</li>
                <li><strong>Refrigerio:</strong> Batido de proteína</li>
                <li><strong>Cena:</strong> Pizza casera con ingredientes saludables</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5dc0b3;">
              <h4 style="color: #333; margin-top: 0;">Viernes - Día 5</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Cereal integral con leche y frutas</li>
                <li><strong>Refrigerio:</strong> Pera con almendras</li>
                <li><strong>Almuerzo:</strong> Lentejas con arroz y ensalada</li>
                <li><strong>Refrigerio:</strong> Yogur con miel</li>
                <li><strong>Cena:</strong> Tacos de pescado con tortillas de maíz</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f3994d;">
              <h4 style="color: #333; margin-top: 0;">Sábado - Día 6</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Tostadas francesas con frutas</li>
                <li><strong>Refrigerio:</strong> Melón y queso fresco</li>
                <li><strong>Almuerzo:</strong> Pollo a la parrilla con ensalada</li>
                <li><strong>Refrigerio:</strong> Barras de granola caseras</li>
                <li><strong>Cena:</strong> Sopa de fideos con verduras</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5dc0b3;">
              <h4 style="color: #333; margin-top: 0;">Domingo - Día 7</h4>
              <ul style="color: #555;">
                <li><strong>Desayuno:</strong> Burrito de huevo con frijoles</li>
                <li><strong>Refrigerio:</strong> Piña y coco</li>
                <li><strong>Almuerzo:</strong> Carne molida con arroz integral</li>
                <li><strong>Refrigerio:</strong> Helado casero de frutas</li>
                <li><strong>Cena:</strong> Ensalada de atún con aguacate</li>
              </ul>
            </div>
            
            <div style="background-color: #d4edda; border: 1px solid #c3e6cb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #155724; margin-top: 0;">💡 Consejos Importantes</h3>
              <ul style="color: #155724;">
                <li>Mantén horarios regulares para las comidas</li>
                <li>Incluye agua en cada comida</li>
                <li>Evita bebidas azucaradas</li>
                <li>Involucra a ${formData.nombreNino} en la preparación</li>
                <li>Haz las comidas divertidas y coloridas</li>
              </ul>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">📞 ¿Necesitas Ayuda?</h3>
              <p style="color: #856404; margin-bottom: 0;">
                Si tienes preguntas sobre este plan o quieres continuar con el programa completo, 
                contáctanos al <strong>(614) 550 2199</strong> o visita nuestra clínica en 
                <strong>Blas Cano de los Ríos 807, San Felipe I</strong>.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                Este es tu plan gratuito de 1 semana. Para continuar con el programa completo 
                y recibir seguimiento personalizado, agenda tu cita con nosotros.
              </p>
            </div>
          </div>
          
          <div style="background-color: #333; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 Clinikids Cuu Pediatría Integral. Todos los derechos reservados.
            </p>
          </div>
        </div>
      `
    };

    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
    
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('No se pudo enviar el email');
  }
}

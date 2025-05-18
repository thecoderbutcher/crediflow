import nodemailer from 'nodemailer'

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  });
  try {
    await trasporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: 'Confirm your email',
      html: `<table align="center" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px 0" width="100%"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style=" background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); overflow: hidden; " ><tr><td style=" background-color: #1F2937; padding: 20px; color: white; text-align: center; " ><h1 style="margin: 0">🪙 MCD CREDIFLOW</h1><p style="margin: 5px 0 0; color: white; font-size: 16px">🔔 Tienes una nueva notificación importante </p></td></tr><tr><td style="padding: 30px; color: #333333; text-align: center"><p style="font-size: 16px">Tu solicitud ha sido procesada con éxito. </p><p style="font-size: 16px">Confirma tu email y accede a tu cuenta. </p><div style="text-align: center; margin: 30px 0"><a href="${confirmLink}" style=" background-color: #1F2937; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; " >Confirmar email</a ></div><p style="font-size: 14px; color: #777">Si no fuiste tú quien solicitó esta acción, por favor ignora este mensaje. </p></td></tr><tr><td style=" background-color: #eeeeee; padding: 20px; text-align: center; font-size: 12px; color: #888; " >© 2025 🪙 MCD CREDIFLOW. Todos los derechos reservados. </td></tr></table></td></tr></table>`,
    });
  }
  catch (err) { console.log(err); }
}

export const sendPasswordReset = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`;
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  /* try {
      const testResult = await transport.verify();
      console.log(testResult);
  } catch (error) {
      console.error(error)
  } */

  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Reset your password",
      html: `<table align="center" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px 0" width="100%"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style=" background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); overflow: hidden; " ><tr><td style=" background-color: #1F2937; padding: 20px; color: white; text-align: center; " ><h1 style="margin: 0">🪙 MCD CREDIFLOW</h1><p style="margin: 5px 0 0; color: white; font-size: 16px">🔔 Tienes una nueva notificación importante </p></td></tr><tr><td style="padding: 30px; color: #333333; text-align: center"><p style="font-size: 16px">Tu solicitud ha sido procesada con éxito. </p><p style="font-size: 16px">Reestablece tu contraseña y accede a tu cuenta. </p><div style="text-align: center; margin: 30px 0"><a href="${resetLink}" style=" background-color: #1F2937; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; " >Reestablecer contraseña</a ></div><p style="font-size: 14px; color: #777">Si no fuiste tú quien solicitó esta acción, por favor ignora este mensaje. </p></td></tr><tr><td style=" background-color: #eeeeee; padding: 20px; text-align: center; font-size: 12px; color: #888; " >© 2025 🪙 MCD CREDIFLOW. Todos los derechos reservados. </td></tr></table></td></tr></table>`,
    })
  } catch (error) { console.error(error) }
}

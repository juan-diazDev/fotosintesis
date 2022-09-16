import sendgrid from '@sendgrid/mail';

export const sendMailSendGrid = (data) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  return sendgrid.send(data);
};

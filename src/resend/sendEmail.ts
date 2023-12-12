import { Resend } from 'resend'

const apiKey = ''

const resend = new Resend(apiKey)

export const sendEmail = async () => {
  try {
    const data = await resend.emails.send({
      from: '',
      to: [''],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    })

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

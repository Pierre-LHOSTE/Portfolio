"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail({
  name,
  email,
  content,
}: {
  name?: string;
  email?: string;
  content: string;
}) {
  const res = await resend.emails.send({
    from: email || "",
    to: "vingt-douze@protonmail.com",
    subject: `Portfolio Contact Form - ${name}`,
    html: `<p>${content}</p>`,
  });
  return res;
}

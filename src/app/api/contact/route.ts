import { NextResponse } from "next/server";

import { ContactSchema } from "@/lib/contact-schema";

import { resend } from "@/lib/resend";

import { isDuplicateSubmission } from "@/lib/contact-cache";
import { canSendEmail } from "@/lib/contact-quota";

const timestamp =
  new Date().toLocaleString(
    "en-US",
    {
      dateStyle: "full",
      timeStyle: "long",
    }
  );



export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const validation =
      ContactSchema.safeParse(body);

    if (!validation.success) {
  console.log(
    validation.error.flatten()
  );

  return NextResponse.json(
    {
      success: false,
      error: "Validation failed",
      details:
        validation.error.flatten(),
    },
    { status: 400 }
  );
}

    const {
      name,
      email,
      subject,
      message,
      website,
      submissionId,
    } = validation.data;

    // Honeypot
    if (website?.trim()) {
      return NextResponse.json(
        {
          success: true,
        },
        { status: 200 }
      );
    }

    if (submissionId && isDuplicateSubmission(submissionId)) {
      return NextResponse.json(
        {
          success: true,
          message: "Request already processed",
        }
      );
    }

    if (!canSendEmail()) {
      return NextResponse.json(
        {
          success: false,
          error: "Daily contact limit reached",
        },
        { status: 429 }
      );
    }

    const result =
  await resend.emails.send({
  from: process.env.CONTACT_FROM_EMAIL!,
  to: process.env.CONTACT_RECEIVER_EMAIL!,
  replyTo: email,
  subject: `[Portfolio] ${subject}`,
    html: buildEmailTemplate({
      name,
      email,
      subject,
      message,
    }),
  });

console.log(
  "RESEND RESULT:",
  result
);

if (result.error) {
  return NextResponse.json(
    {
      success: false,
      error: result.error.message,
    },
    {
      status: 500,
    }
  );
}

    return NextResponse.json({
      success: true,
      message: "Email sent",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Unexpected server error",
      },
      { status: 500 }
    );
  }
}

function buildEmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
  <div style="font-family:Arial;padding:24px">

    <h2>
      New Portfolio Contact Submission
    </h2>

    <table
      style="
        border-collapse:collapse;
        width:100%;
      "
    >

      <tr>
        <td><strong>Name</strong></td>
        <td>${escapeHtml(name)}</td>
      </tr>

      <tr>
        <td><strong>Email</strong></td>
        <td>${escapeHtml(email)}</td>
      </tr>

      <tr>
        <td><strong>Subject</strong></td>
        <td>${escapeHtml(subject)}</td>
      </tr>

      <tr>
  <td><strong>Timestamp</strong></td>
  <td>${timestamp}</td>
</tr>

    </table>

    <hr />

    <p>
      ${escapeHtml(message)}
    </p>

  </div>
  `;
}

function escapeHtml(
  unsafe: string
) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}



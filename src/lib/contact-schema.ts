import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100),

  email: z
    .email()
    .max(255),

  subject: z
    .string()
    .min(3)
    .max(200),

  message: z
    .string()
    .min(10)
    .max(5000),

  website: z.string().optional(),
  submissionId: z.string().optional(),
});

export type ContactRequest =
  z.infer<typeof ContactSchema>;
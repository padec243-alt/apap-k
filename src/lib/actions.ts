'use server';

import { getContentEnhancementSuggestions } from '@/ai/flows/content-enhancement-suggestions';
import { z } from 'zod';

const EnhanceContentSchema = z.object({
  content: z.string().min(10, 'Le contenu doit comporter au moins 10 caractères.'),
});

type FormState = {
  message: string;
  suggestions?: string;
};

export async function enhanceContent(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = EnhanceContentSchema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      suggestions: validatedFields.error.flatten().fieldErrors.content?.join(', '),
    };
  }

  try {
    const result = await getContentEnhancementSuggestions({
      content: validatedFields.data.content,
    });
    return {
      message: 'success',
      suggestions: result.suggestions,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'error',
      suggestions: "Une erreur s'est produite lors de la génération des suggestions. Veuillez réessayer.",
    };
  }
}

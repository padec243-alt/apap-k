'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing content enhancement suggestions using AI.
 *
 * - getContentEnhancementSuggestions - A function that takes content as input and returns enhancement suggestions.
 * - ContentEnhancementInput - The input type for the getContentEnhancementSuggestions function.
 * - ContentEnhancementOutput - The output type for the getContentEnhancementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentEnhancementInputSchema = z.object({
  content: z
    .string()
    .describe('Le contenu à améliorer. Ceci doit être une phrase ou un paragraphe complet.'),
});
export type ContentEnhancementInput = z.infer<typeof ContentEnhancementInputSchema>;

const ContentEnhancementOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('Une liste de suggestions pour améliorer le contenu, formatée en paragraphe.'),
});
export type ContentEnhancementOutput = z.infer<typeof ContentEnhancementOutputSchema>;

export async function getContentEnhancementSuggestions(
  input: ContentEnhancementInput
): Promise<ContentEnhancementOutput> {
  return contentEnhancementFlow(input);
}

const contentEnhancementPrompt = ai.definePrompt({
  name: 'contentEnhancementPrompt',
  input: {schema: ContentEnhancementInputSchema},
  output: {schema: ContentEnhancementOutputSchema},
  prompt: `Vous êtes un assistant IA qui aide les créateurs de contenu à améliorer leur contenu écrit.

  Fournissez des suggestions pour améliorer le contenu suivant. Concentrez-vous sur la clarté, la concision et l'impact. Répondez en français.

  Contenu: {{{content}}}

  Suggestions:`,
});

const contentEnhancementFlow = ai.defineFlow(
  {
    name: 'contentEnhancementFlow',
    inputSchema: ContentEnhancementInputSchema,
    outputSchema: ContentEnhancementOutputSchema,
  },
  async input => {
    const {output} = await contentEnhancementPrompt(input);
    return output!;
  }
);

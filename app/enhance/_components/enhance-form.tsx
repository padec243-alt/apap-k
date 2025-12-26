'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Lightbulb, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { enhanceContent } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const initialState = {
  message: '',
  suggestions: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération...
        </>
      ) : (
        'Obtenir des suggestions'
      )}
    </Button>
  );
}

export function EnhanceForm() {
  const [state, formAction] = useFormState(enhanceContent, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'success') {
      formRef.current?.reset();
    }
  }, [state.message]);
  
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Votre Texte</CardTitle>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Saisissez votre contenu ci-dessous</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Écrivez une phrase ou un paragraphe à améliorer..."
                rows={8}
                required
              />
            </div>
            {state.message === 'error' && state.suggestions && (
              <p className="text-sm text-destructive">{state.suggestions}</p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="text-primary" />
            Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {state.message === 'success' && state.suggestions ? (
            <p className="text-foreground/90">{state.suggestions}</p>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-muted-foreground">
                Les suggestions pour améliorer votre texte apparaîtront ici.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

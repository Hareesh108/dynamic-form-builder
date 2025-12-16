import type { FormSchema } from './types';

export const defaultSchema: FormSchema = {
  title: 'Contact Request',
  description: 'Example form generated from schema',
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', validation: { required: true, minLength: 3 } },
    { name: 'email', label: 'Email', type: 'text', validation: { required: true, pattern: '^\\S+@\\S+\\.\\S+$' } },
    { name: 'age', label: 'Age', type: 'number', validation: { min: 18, max: 120 } },
    { name: 'contactMethod', label: 'Preferred Contact', type: 'select', options: [ { label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' } ] },
    { name: 'phone', label: 'Phone Number', type: 'text', conditional: { field: 'contactMethod', value: 'phone' } },
    { name: 'subscribe', label: 'Subscribe to updates', type: 'checkbox' },
  ],
};

export function isJsonValid(text: string): { ok: boolean; message?: string } {
  try {
    JSON.parse(text);
    return { ok: true };
  } catch (e: any) {
    return { ok: false, message: 'Please provide valid JSON format: ' + (e?.message ?? 'Invalid JSON') };
  }
}

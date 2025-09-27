import { z } from 'zod/mini';

export const setting = z.object({
    name: z.string(),
    label: z.string(),
    value: z.boolean()
});

export type Setting = z.infer<typeof setting>;

export const settings = z.object({
    settings: z.array(setting)
});

export type Settings = z.infer<typeof settings>;
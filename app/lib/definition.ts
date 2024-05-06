import { z } from 'zod';

export const UserGeoType = z.object({
    ip: z.string().ip(),
    country: z.string(),
    region: z.string()
})
export type UserGeo = z.infer<typeof UserGeoType>
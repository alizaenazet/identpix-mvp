'use server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { sql } from '@vercel/postgres'; 
import { redirect } from 'next/navigation';
import { UserGeo, UserGeoType } from "@/app/lib/definition";


const FormSchema = z.object({
    email: z.string({invalid_type_error: "please insert your email"}).email(),
    background: z.number(),
    plan: z.number(),
    ip: z.string().ip(),
    country: z.string(),
    region: z.string()
})

export type State = {
    errors?: {
      email?: string[];
      background?: string[];
      plan?: string[];
      ip?: string[],
      country?: string[],
      region?: string[]
    };
    message?: string | null;
  };

const InsertUser = FormSchema.omit({})
export async function insertUser(prevState: State, formData: FormData) {
    
    const validatedFields = InsertUser.safeParse({
        email: formData.get("email"),
        background: Number(formData.get("background")),
        plan: Number(formData.get("plan")),
        ip: formData.get('ip'),
        country: formData.get('country'),
        region: formData.get('region'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Something wrong, try again later..',
        }
    }

    const {email,ip,country,region,background,plan} = validatedFields.data
    console.log("query result");
    
    
    try {
        // Disable temporary
        await sql`
        INSERT INTO form_entries (email, background, plan, ip, country, region)
        VALUES (${email}, ${background}, ${plan}, ${ip}, ${country}, ${region});
        `;
    } catch (error) {
        console.log(error);
        
        return {message: 'Database Error: Failed to insert user data.',}      
    }

    revalidatePath('/register');
    redirect('/coming-soon');
}

export async function updateUserNotifable(value:boolean,ip:string) {
    console.log(`🔥 tes coy masuk kiw ${value} - ${ip}`);
    try {
        await sql`
            UPDATE users
            SET color = ${value}
            WHERE ip_address = ${ip}
        `;
    } catch (error) {
        redirect('/register');
    }
}
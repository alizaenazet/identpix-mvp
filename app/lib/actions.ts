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
        INSERT INTO users (ip_address, email, background, plan, country, region, notifable)
        VALUES (${ip}, ${email}, ${background}, ${plan}, ${country},${region},true);
        `;
    } catch (error: any) {
        if(error.code == 23505){
            redirect('/coming-soon');
        }
        
        
        console.log("🔥 error happen :");
        console.log(error);
        return {message: 'Database Error: Failed to insert user data.',}      
    }

    revalidatePath('/register');
    redirect('/coming-soon');
}

export async function updateUserNotifable(value:boolean,ip:string) {
    try {
        await sql`
            UPDATE users
            SET notifable = ${value}
            WHERE ip_address = ${ip}
        `;
    } catch (error) {
        redirect('/register');
    }
}
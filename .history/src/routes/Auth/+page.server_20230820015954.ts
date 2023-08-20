import { supabase } from "../../supabaseClient";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export async function signInWithEmail(email:string, password:string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  }

export async function signOut() {
    const { error } = await supabase.auth.signOut()
}

export async function singUp(email:string,password:string){
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
}


export const actions: Actions = {
    register:async ({request,locals})=>{
        const body = Object.fromEntries(await request.formData())
        const {data,error:err} = await supabase.auth.signUp({
            email:body.email as string,
            password:body.password as string
        })

        if(err){
            if(err instanceof AuthApiError && err.status === 400){
                return fail(400,{
                    error:"Invalid email or password"
                })
            }
            return fail(500, {error:"Server error. Please try again later."})
        }
        throw redirect(303, "/Private")
    }
};
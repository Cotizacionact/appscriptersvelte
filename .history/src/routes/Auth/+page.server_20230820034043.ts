
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";




export const actions: Actions = {
    register:async ({request,locals:{supabase}})=>{
        const body = Object.fromEntries(await request.formData())
        const {data,error:err} = await supabase.auth.signUp({
            email:body.email as string,
            password:body.password as string,
            options:{
                emailRedirectTo:`${location.origin}/Auth/callback`
            }
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
    },
    login:async ({request,locals:{supabase}})=>{
        const body = Object.fromEntries(await request.formData())
        const {data, error:err} = await supabase.auth.signInWithPassword({
            email:body.email as string,
            password:body.password as string,
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
    },
};
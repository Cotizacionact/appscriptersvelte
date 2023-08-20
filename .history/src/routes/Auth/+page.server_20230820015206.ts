import { supabase } from "../../supabaseClient";
import type { Actions } from "@sveltejs/kit";

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
    
};
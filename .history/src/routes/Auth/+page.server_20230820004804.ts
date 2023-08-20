import { supabase } from "../../supabaseClient";

export async function signInWithEmail(email:string, password:string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  }

export async function signOut() {
    const { error } = await supabase.auth.signOut()
  }
  
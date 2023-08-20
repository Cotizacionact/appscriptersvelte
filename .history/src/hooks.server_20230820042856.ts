import type { Handle } from "@sveltejs/kit"
import "./supabaseClient"
import {getSupabase} from "@supabase/auth-helpers-sveltekit"
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"

export const handle:Handle =async ({event,resolve}) => {
    const {session, supabase} = await getSupabase(event)

    event.locals.sb = supabase
    event.locals.session = session

    return resolve(event)
}
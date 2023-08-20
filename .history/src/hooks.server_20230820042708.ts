import type { Handle } from "@sveltejs/kit"
import "./supabaseClient"
import {getSupabase} from "@supabase/auth-helpers-sveltekit"
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"

export const handle:Handle =async ({event,resolve}) => {
    const {session, supabase} = await getSupabase(event)
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl:PUBLIC_SUPABASE_URL,
        supabaseKey:PUBLIC_SUPABASE_ANON_KEY,
        event
    })

    event.locals.getSession =async () => {
        const {data:{session}} = await event.locals.supabase.auth.getSession()
        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
          return name === 'content-range'
        },
      })
}
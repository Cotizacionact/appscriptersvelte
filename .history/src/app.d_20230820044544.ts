// See https://kit.svelte.dev/docs/types#app
import type {TypedSupabaseClient} from "@supabase/auth-helpers-sveltekit/dist/types"
import type { SupabaseClient, Session } from "@supabase/supabase-js";
import { Database } from './DatabaseDefinitions'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session:Session|null,
			getSession(): Promise<Session | null>
		}
		interface PageData {
		  session: import("@supabase/supabase-js").Session | null
		}
		// interface Platform {}
	}
}

export {};

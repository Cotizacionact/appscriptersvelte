// src/app.d.ts

import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

declare global {
  namespace App {
    interface Locals {

    }
    interface ImportMetaEnv{
      XATA_BRANCH:string;
      XATA_API_KEY:string;
    }
    interface PageData {

    }
    // interface Error {}
    // interface Platform {}
  }
}

export {};

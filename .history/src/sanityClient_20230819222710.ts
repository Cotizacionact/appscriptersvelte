import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: '5vyiywkd',
    dataset: 'production',
    apiVersion:"2023-08-19",
    useCdn:false

})
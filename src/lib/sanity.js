import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // from sanity.json or sanity.io/manage
  dataset: "production",
  apiVersion: "2023-07-29",
  useCdn: true
})

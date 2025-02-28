import groq from "groq";
import { sanity_client } from "../../lib/sanity/sanity_client.js";

const PROPERTIES_QUERY = groq`*[_type == "property"] {
    _id,
    _type,
    title,
    "slug": slug.current
}`;

export default async function () {
    const data = await sanity_client.fetch(PROPERTIES_QUERY);
    return data;
}

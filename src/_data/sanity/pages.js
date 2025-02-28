import groq from "groq";
import { sanity_client } from "../../lib/sanity/sanity_client.js";
import {
    OPEN_GRAPH_PROJECTION,
    SEO_PROJECTION,
} from "../../lib/sanity/groq_fragments/common_projections.js";

const PAGES_QUERY = groq`*[_type == "page"] {
    _id,
    _type,
    title,
    "slug": slug.current,
    layout,
    modules[] {
        ...
    },
    seo ${SEO_PROJECTION},
    "open_graph": openGraph ${OPEN_GRAPH_PROJECTION}
}`;

export default async function () {
    const data = await sanity_client.fetch(PAGES_QUERY);
    return data;
}

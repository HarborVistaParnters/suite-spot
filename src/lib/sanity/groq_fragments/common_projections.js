import groq from "groq";

export const SEO_PROJECTION = groq`{
    title,
    description
}`;

export const OPEN_GRAPH_PROJECTION = groq`{
    "title": ogTitle,
    "image": ogImage {
        ...,
        asset->
    }
}`;

export const LINK_PROJECTION = groq`{
    type,
    label,
    is_cta,
    type == "reference" => {
        reference-> {
            _id,
            "slug": pageSlug.current,
            title
        }
    },
    type == "internal" => {
        "href": internal
    },
    type == "external" => {
        "href": external,
        target
    }
}`;

/** @link https://www.11ty.dev/docs/config/ */
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { format } from "@formkit/tempo";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default function (config) {
    /** Liquid Template Settings */
    config.setLayoutResolution(false);
    config.setLiquidOptions({ jsTruthy: true, dynamicPartials: true });

    /** Passthrough directories */
    config.addPassthroughCopy({ "src/static": "/" });

    /** Plugins */
    // 11ty image
    config.addPlugin(eleventyImageTransformPlugin, {
        htmlOptions: {
            imgAttributes: {
                alt: "",
                loading: "lazy",
                decoding: "async",
            },
        },
    });

    /** Filters */
    config.addFilter("short_date", (date_string) => {
        return format({
            date: date_string,
            format: "medium",
            tz: "UTC",
        });
    });

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html", "liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
    };
}

export default {
    permalink: ({ page }) => {
        if (page.filePathStem === "/content/index") {
            return "/";
        } else {
            // slice '/content/' from slug
            return `/${page.filePathStem.slice(9)}/`;
        }
    },
};

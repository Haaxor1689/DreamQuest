
export const getUrlPrefix = (): string => {
    if (location.hostname === "localhost") {
        return "";
    }
    return "https://raw.githubusercontent.com/Haaxor1689/DreamQuest/master";
}

export const getUrl = (relativePath: string): string => relativePath === "" ? "https://via.placeholder.com/480x224?text=Placeholder" : getUrlPrefix() + relativePath;
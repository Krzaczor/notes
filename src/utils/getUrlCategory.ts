export const getUrlCategory = (url: string, categoryId: string | null) => {
    if (categoryId) {
        return `${url}?c=${categoryId}`;
    }

    return url;
}
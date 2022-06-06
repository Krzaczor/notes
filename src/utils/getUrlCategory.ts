export const getUrlCategory = (url: string, categoryId: string | undefined) => {
    if (categoryId) {
        return `${url}?c=${categoryId}`;
    }

    return url;
}
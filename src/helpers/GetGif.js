export const getGif = async (category) => {

    const url=`https://api.giphy.com/v1/gifs/search?api_key=4Evk6WvzDVCnAMkCh3WCxTAsCsG3y4uV&q=${encodeURI(category)}&limit=30`
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}
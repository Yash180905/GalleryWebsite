import { API } from "./backend";
export const UploadData = (data) => {
    return fetch(`${API}/add/image`, {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: data
    }).then(response => console.log(response))
        .catch(err => console.log(err))
}
export const getImages = () => {
    return fetch(`${API}/images`, {
        method: "GET"
    })
}
export const getImageUrl = (imageId) => {
    const url = imageId ? `${API}/image/${imageId}` : 'https://images.pexels.com/photos/9043366/pexels-photo-9043366.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
    return url

}
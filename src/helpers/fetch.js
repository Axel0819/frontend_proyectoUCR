const baseURL = process.env.REACT_APP_URL_API

export const fetchApp = ( endpont, data, method ) => {
    const url = `${ baseURL }/${endpont}`

    if(method === 'GET'){
        return fetch(url)
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}
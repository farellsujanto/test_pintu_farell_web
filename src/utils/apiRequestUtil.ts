import ApiResponse from '../models/apiResponseModel';

// TODO: Put in .env
const BASE_URL = 'https://api.pintu.co.id';

export type RequestMethod = 'DELETE' | 'GET' | 'POST' | 'PUT' | undefined;

export function parseObjectDataToBody(
    method: RequestMethod,
    data: string | object | undefined,
) {
    if (method === 'GET' || !data) {
        return undefined;
    }
    // TODO: Handle other content type. eg: JSON
}

function getHeaders() {
    // TODO: Handle more headers. eg: Auth Token, API Key
    return {};
}

export async function fetchApi<T>(
    url: string,
    data: string | object | undefined,
    method: RequestMethod,
): Promise<T | null> {
    const encodedUri = encodeURI(url);
    try {
        const body = parseObjectDataToBody(method, data);
        return fetch(BASE_URL + encodedUri, {
            method: method,
            headers: getHeaders(),
            body: body,
        }).then(async (res) => {

            const isSuccessCode = Math.floor(res.status / 100) === 2;
            const json = (await res.json()) as ApiResponse<T>;
            if (isSuccessCode) {
                return json.payload;
            }
            // TODO: Handle non 2xx response codes
            return null;
        });
    } catch (e) {
        console.log('Error when fetching', e);
        return null;
    }
}

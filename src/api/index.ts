import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create();

/**
 * API response model
 */
export interface APIResponse<T> {
  data?: T;
  isError: boolean;
}

const wrapError = (error: AxiosError) => {
  return { isError: true, ...error.response?.data } as APIResponse<any>;
};

/**
 * Generic HTTP GET
 * @param {string} endpoint
 * @returns response
 */
export async function getData<T>(endpoint: string): Promise<APIResponse<T>> {
  return instance
    .get(endpoint)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => wrapError(error));
}

/**
 * Generic HTTP POST
 * @param {string}endpoint
 * @param {T} data
 * @returns response
 */
export async function postData<T, U>(
  endpoint: string,
  data: T
): Promise<APIResponse<U>> {
  return instance
    .post(endpoint, data)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => wrapError(error));
}

/**
 * Generic HTTP PUT
 * @param {string} endpoint
 * @param {T} data
 * @returns response
 */
export async function putData<T, U>(
  endpoint: string,
  data: T
): Promise<APIResponse<U>> {
  return instance
    .put(endpoint, data)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => wrapError(error));
}

/**
 * Generic HTTP DELETE
 * @param {string} endpoint
 * @returns response
 */
export async function deleteData<U>(endpoint: string): Promise<APIResponse<U>> {
  return instance
    .delete(endpoint)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => wrapError(error));
}

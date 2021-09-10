import axios from 'axios';
import { CoinForBarterStatus } from '../types';
import { RequestResponseSchema } from '../types/request';

export class CoinForBarterRequest {
  private url = 'https://api.coinforbarter.com/v1';
  constructor(
    private readonly publicKey: string,
    private readonly secretKey: string,
  ) {}

  async call(
    path = '',
    method = 'get',
    body = {},
    useToken = false,
    contentType = 'application/json',
  ): Promise<RequestResponseSchema> {
    try {
      let request: Record<string, any>;
      const url = `${this.url}${path}`;
      if (method === 'get' || method === 'delete') {
        if (useToken) {
          const headers = {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': contentType,
          };
          request = await axios[method](url, { headers });
        }
        if (!useToken) {
          const headers = {
            'Content-Type': contentType,
          };
          request = await axios[method](url, { headers });
        }
      }
      if (method !== 'get' && method !== 'delete') {
        if (useToken) {
          const headers = {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': contentType,
          };
          request = await axios[method](url, body, { headers });
        }
        if (!useToken) {
          const headers = {
            'Content-Type': contentType,
          };
          request = await axios[method](url, body, { headers });
        }
      }
      const status = CoinForBarterStatus.Success;
      if (request.status === 204) {
        const { status: statusCode } = request;
        return {
          data: '',
          statusCode,
          message: '',
          status,
        };
      }
      const {
        data: { data, message },
        status: statusCode,
      } = request;
      return { data, status, message, statusCode };
    } catch (error) {
      const status = CoinForBarterStatus.Error;
      if (error.response?.status && error.response?.data) {
        const {
          status: statusCode,
          data: { data, message },
        } = error.response;
        return { data, message, status, statusCode };
      }
      return {
        status,
        message: 'an error occurred',
        data: null,
        statusCode: null,
      };
    }
  }

  makeQueryString(query: Record<string, any>): string {
    const queryArray = Object.entries(query).map(
      ([key, value]) => `${key}=${value}`,
    );
    return queryArray.length > 0 ? `?${queryArray.join('&')}` : '';
  }
}

import { Client } from '@vonage/server-client'
import { AccountCallbacks } from './interfaces/AccountCallbacks';
import { AccountUpdateResponse } from './interfaces/Response/AccountUpdateResponse';
import { GetBalanceResponse } from './interfaces/Response/GetBalanceResponse';
import { TopUpBalanceResponse } from './interfaces/Response/TopUpBalanceResponse';

export class Accounts extends Client {
    public async getBalance(): Promise<GetBalanceResponse> {
        const response = await this.sendGetRequest<GetBalanceResponse>(`${this.config.restHost}/account/get-balance`);
        return response.data;
    }

    public async topUpBalance(trx: string): Promise<TopUpBalanceResponse> {
        const response = await this.sendFormSubmitRequest<TopUpBalanceResponse>(`${this.config.restHost}/account/top-up`, { trx });
        return response.data; 
    }

    public async updateAccountCallbacks(callbacks: AccountCallbacks): Promise<AccountUpdateResponse> {
        const response = await this.sendFormSubmitRequest<AccountUpdateResponse>(`${this.config.restHost}/account/settings`, callbacks);
        return response.data;
    }
}
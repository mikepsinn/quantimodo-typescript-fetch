/* tslint:disable */
/* eslint-disable */
/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk\'s](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * The version of the OpenAPI document: 5.8.112511
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    GetSharesResponse,
    GetSharesResponseFromJSON,
    GetSharesResponseToJSON,
    ShareInvitationBody,
    ShareInvitationBodyFromJSON,
    ShareInvitationBodyToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface DeleteShareRequest {
    clientIdToRevoke: string;
    reason?: string;
    platform?: DeleteSharePlatformEnum;
}

export interface GetSharesRequest {
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
    clientId?: string;
    appVersion?: string;
    platform?: GetSharesPlatformEnum;
    log?: string;
    pwd?: string;
}

export interface InviteShareRequest {
    body: ShareInvitationBody;
    platform?: InviteSharePlatformEnum;
    clientId?: string;
}

/**
 * 
 */
export class SharesApi extends runtime.BaseAPI {

    /**
     * Remove access to user data for a given client_id associated with a given individual, app, or study
     * Delete share
     */
    async deleteShareRaw(requestParameters: DeleteShareRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.clientIdToRevoke === null || requestParameters.clientIdToRevoke === undefined) {
            throw new runtime.RequiredError('clientIdToRevoke','Required parameter requestParameters.clientIdToRevoke was null or undefined when calling deleteShare.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clientIdToRevoke !== undefined) {
            queryParameters['clientIdToRevoke'] = requestParameters.clientIdToRevoke;
        }

        if (requestParameters.reason !== undefined) {
            queryParameters['reason'] = requestParameters.reason;
        }

        if (requestParameters.platform !== undefined) {
            queryParameters['platform'] = requestParameters.platform;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["writemeasurements"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/shares/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Remove access to user data for a given client_id associated with a given individual, app, or study
     * Delete share
     */
    async deleteShare(requestParameters: DeleteShareRequest): Promise<User> {
        const response = await this.deleteShareRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is a list of individuals, apps, or studies with access to your measurements.
     * Get Authorized Apps, Studies, and Individuals
     */
    async getSharesRaw(requestParameters: GetSharesRequest): Promise<runtime.ApiResponse<GetSharesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.createdAt !== undefined) {
            queryParameters['createdAt'] = requestParameters.createdAt;
        }

        if (requestParameters.updatedAt !== undefined) {
            queryParameters['updatedAt'] = requestParameters.updatedAt;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.appVersion !== undefined) {
            queryParameters['appVersion'] = requestParameters.appVersion;
        }

        if (requestParameters.platform !== undefined) {
            queryParameters['platform'] = requestParameters.platform;
        }

        if (requestParameters.log !== undefined) {
            queryParameters['log'] = requestParameters.log;
        }

        if (requestParameters.pwd !== undefined) {
            queryParameters['pwd'] = requestParameters.pwd;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["writemeasurements"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/shares`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSharesResponseFromJSON(jsonValue));
    }

    /**
     * This is a list of individuals, apps, or studies with access to your measurements.
     * Get Authorized Apps, Studies, and Individuals
     */
    async getShares(requestParameters: GetSharesRequest): Promise<GetSharesResponse> {
        const response = await this.getSharesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Invite someone to view your measurements
     * Delete share
     */
    async inviteShareRaw(requestParameters: InviteShareRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling inviteShare.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.platform !== undefined) {
            queryParameters['platform'] = requestParameters.platform;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["writemeasurements"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/shares/invite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShareInvitationBodyToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Invite someone to view your measurements
     * Delete share
     */
    async inviteShare(requestParameters: InviteShareRequest): Promise<User> {
        const response = await this.inviteShareRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSharePlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum GetSharesPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum InviteSharePlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
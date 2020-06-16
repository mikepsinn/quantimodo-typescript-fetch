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

import { exists, mapValues } from '../runtime';
import {
    AuthorizedClients,
    AuthorizedClientsFromJSON,
    AuthorizedClientsFromJSONTyped,
    AuthorizedClientsToJSON,
    Card,
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetSharesResponse
 */
export interface GetSharesResponse {
    /**
     * 
     * @type {AuthorizedClients}
     * @memberof GetSharesResponse
     */
    authorizedClients?: AuthorizedClients;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof GetSharesResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetSharesResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof GetSharesResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GetSharesResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GetSharesResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GetSharesResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GetSharesResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof GetSharesResponse
     */
    card?: Card;
}

export function GetSharesResponseFromJSON(json: any): GetSharesResponse {
    return GetSharesResponseFromJSONTyped(json, false);
}

export function GetSharesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSharesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizedClients': !exists(json, 'authorizedClients') ? undefined : AuthorizedClientsFromJSON(json['authorizedClients']),
        'description': json['description'],
        'summary': json['summary'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function GetSharesResponseToJSON(value?: GetSharesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizedClients': AuthorizedClientsToJSON(value.authorizedClients),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


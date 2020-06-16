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
    Card,
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
    PostTrackingRemindersDataResponse,
    PostTrackingRemindersDataResponseFromJSON,
    PostTrackingRemindersDataResponseFromJSONTyped,
    PostTrackingRemindersDataResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface PostTrackingRemindersResponse
 */
export interface PostTrackingRemindersResponse {
    /**
     * 
     * @type {PostTrackingRemindersDataResponse}
     * @memberof PostTrackingRemindersResponse
     */
    data?: PostTrackingRemindersDataResponse;
    /**
     * Message
     * @type {string}
     * @memberof PostTrackingRemindersResponse
     */
    message?: string;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostTrackingRemindersResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostTrackingRemindersResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof PostTrackingRemindersResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostTrackingRemindersResponse
     */
    status: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostTrackingRemindersResponse
     */
    success: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostTrackingRemindersResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostTrackingRemindersResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof PostTrackingRemindersResponse
     */
    card?: Card;
}

export function PostTrackingRemindersResponseFromJSON(json: any): PostTrackingRemindersResponse {
    return PostTrackingRemindersResponseFromJSONTyped(json, false);
}

export function PostTrackingRemindersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTrackingRemindersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : PostTrackingRemindersDataResponseFromJSON(json['data']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': json['status'],
        'success': json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function PostTrackingRemindersResponseToJSON(value?: PostTrackingRemindersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PostTrackingRemindersDataResponseToJSON(value.data),
        'message': value.message,
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


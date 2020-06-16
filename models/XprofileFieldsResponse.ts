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
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    XprofileField,
    XprofileFieldFromJSON,
    XprofileFieldFromJSONTyped,
    XprofileFieldToJSON,
} from './';

/**
 * 
 * @export
 * @interface XprofileFieldsResponse
 */
export interface XprofileFieldsResponse {
    /**
     * 
     * @type {Array<XprofileField>}
     * @memberof XprofileFieldsResponse
     */
    xprofileFields: Array<XprofileField>;
    /**
     * XprofileField
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    description?: string;
    /**
     * XprofileField
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    summary?: string;
    /**
     * 
     * @type {Image}
     * @memberof XprofileFieldsResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof XprofileFieldsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof XprofileFieldsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof XprofileFieldsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof XprofileFieldsResponse
     */
    card?: Card;
}

export function XprofileFieldsResponseFromJSON(json: any): XprofileFieldsResponse {
    return XprofileFieldsResponseFromJSONTyped(json, false);
}

export function XprofileFieldsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): XprofileFieldsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'xprofileFields': ((json['xprofileFields'] as Array<any>).map(XprofileFieldFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'ionIcon': !exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function XprofileFieldsResponseToJSON(value?: XprofileFieldsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'xprofileFields': ((value.xprofileFields as Array<any>).map(XprofileFieldToJSON)),
        'description': value.description,
        'summary': value.summary,
        'image': ImageToJSON(value.image),
        'avatar': value.avatar,
        'ionIcon': value.ionIcon,
        'html': value.html,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


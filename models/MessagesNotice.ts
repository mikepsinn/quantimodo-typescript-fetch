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
/**
 * 
 * @export
 * @interface MessagesNotice
 */
export interface MessagesNotice {
    /**
     * What do you expect?
     * @type {number}
     * @memberof MessagesNotice
     */
    id: number;
    /**
     * What do you expect?
     * @type {string}
     * @memberof MessagesNotice
     */
    subject: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof MessagesNotice
     */
    message: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof MessagesNotice
     */
    dateSent: string;
    /**
     * What do you expect?
     * @type {number}
     * @memberof MessagesNotice
     */
    isActive: number;
    /**
     * Additional messagesnotice key-value data
     * @type {Array<object>}
     * @memberof MessagesNotice
     */
    metaDataArray?: Array<object>;
}

export function MessagesNoticeFromJSON(json: any): MessagesNotice {
    return MessagesNoticeFromJSONTyped(json, false);
}

export function MessagesNoticeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesNotice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'subject': json['subject'],
        'message': json['message'],
        'dateSent': json['dateSent'],
        'isActive': json['isActive'],
        'metaDataArray': !exists(json, 'metaDataArray') ? undefined : json['metaDataArray'],
    };
}

export function MessagesNoticeToJSON(value?: MessagesNotice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'subject': value.subject,
        'message': value.message,
        'dateSent': value.dateSent,
        'isActive': value.isActive,
        'metaDataArray': value.metaDataArray,
    };
}


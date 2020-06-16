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
import { Card, Image, MessagesNotice } from './';
/**
 *
 * @export
 * @interface MessagesNoticesResponse
 */
export interface MessagesNoticesResponse {
    /**
     *
     * @type {Array<MessagesNotice>}
     * @memberof MessagesNoticesResponse
     */
    messagesNotices: Array<MessagesNotice>;
    /**
     * MessagesNotice
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    description?: string;
    /**
     * MessagesNotice
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    summary?: string;
    /**
     *
     * @type {Image}
     * @memberof MessagesNoticesResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof MessagesNoticesResponse
     */
    errors?: Array<Error>;
    /**
     * Error message
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    error?: string;
    /**
     * Error message
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    errorMessage?: string;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof MessagesNoticesResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof MessagesNoticesResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof MessagesNoticesResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof MessagesNoticesResponse
     */
    card?: Card;
}
export declare function MessagesNoticesResponseFromJSON(json: any): MessagesNoticesResponse;
export declare function MessagesNoticesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesNoticesResponse;
export declare function MessagesNoticesResponseToJSON(value?: MessagesNoticesResponse | null): any;
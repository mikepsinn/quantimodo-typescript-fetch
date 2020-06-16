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
/**
 *
 * @export
 * @interface Friend
 */
export interface Friend {
    /**
     * What do you expect?
     * @type {number}
     * @memberof Friend
     */
    id: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Friend
     */
    initiatorUserId: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Friend
     */
    friendUserId: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Friend
     */
    isConfirmed: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Friend
     */
    isLimited: number;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Friend
     */
    dateCreated: string;
    /**
     * Additional friend key-value data
     * @type {Array<object>}
     * @memberof Friend
     */
    metaDataArray?: Array<object>;
}
export declare function FriendFromJSON(json: any): Friend;
export declare function FriendFromJSONTyped(json: any, ignoreDiscriminator: boolean): Friend;
export declare function FriendToJSON(value?: Friend | null): any;
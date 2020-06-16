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
import { User } from './';
/**
 *
 * @export
 * @interface AppSettings
 */
export interface AppSettings {
    /**
     * What do you expect?
     * @type {object}
     * @memberof AppSettings
     */
    additionalSettings?: object;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    appDescription?: string;
    /**
     * What do you expect?
     * @type {object}
     * @memberof AppSettings
     */
    appDesign?: object;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    appDisplayName?: string;
    /**
     * What do you expect?
     * @type {object}
     * @memberof AppSettings
     */
    appStatus?: object;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    appType?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    buildEnabled?: string;
    /**
     * Get yours at https:://builder.quantimo.do
     * @type {string}
     * @memberof AppSettings
     */
    clientId: string;
    /**
     * Get yours at https:://builder.quantimo.do
     * @type {string}
     * @memberof AppSettings
     */
    clientSecret?: string;
    /**
     * What do you expect?
     * @type {Array<User>}
     * @memberof AppSettings
     */
    collaborators?: Array<User>;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    createdAt?: string;
    /**
     * User id of the owner of the application
     * @type {number}
     * @memberof AppSettings
     */
    userId?: number;
    /**
     * What do you expect?
     * @type {Array<User>}
     * @memberof AppSettings
     */
    users?: Array<User>;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    redirectUri?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    companyName?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    homepageUrl?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    iconUrl?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    longDescription?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    splashScreen?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof AppSettings
     */
    textLogo?: string;
}
export declare function AppSettingsFromJSON(json: any): AppSettings;
export declare function AppSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSettings;
export declare function AppSettingsToJSON(value?: AppSettings | null): any;
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
 * @interface User
 */
export interface User {
    /**
     * User access token
     * @type {string}
     * @memberof User
     */
    accessToken: string;
    /**
     * Ex: 2018-08-08 02:41:19
     * @type {string}
     * @memberof User
     */
    accessTokenExpires?: string;
    /**
     * Ex: 1533696079000
     * @type {number}
     * @memberof User
     */
    accessTokenExpiresAtMilliseconds?: number;
    /**
     * Is user administrator
     * @type {boolean}
     * @memberof User
     */
    administrator: boolean;
    /**
     * 
     * @type {AuthorizedClients}
     * @memberof User
     */
    authorizedClients?: AuthorizedClients;
    /**
     * Ex: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
     * @type {string}
     * @memberof User
     */
    avatar?: string;
    /**
     * Ex: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
     * @type {string}
     * @memberof User
     */
    avatarImage?: string;
    /**
     * Ex: a:1:{s:13:"administrator";b:1;}
     * @type {string}
     * @memberof User
     */
    capabilities?: string;
    /**
     * 
     * @type {Card}
     * @memberof User
     */
    card?: Card;
    /**
     * Ex: quantimodo
     * @type {string}
     * @memberof User
     */
    clientId?: string;
    /**
     * Ex: 118444693184829555362
     * @type {string}
     * @memberof User
     */
    clientUserId?: string;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    combineNotifications?: boolean;
    /**
     * When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
     * @type {string}
     * @memberof User
     */
    createdAt?: string;
    /**
     * Your bio will be displayed on your published studies
     * @type {string}
     * @memberof User
     */
    description?: string;
    /**
     * User display name
     * @type {string}
     * @memberof User
     */
    displayName: string;
    /**
     * Earliest time user should get notifications. Ex: 05:00:00
     * @type {string}
     * @memberof User
     */
    earliestReminderTime?: string;
    /**
     * User email
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * Ex: Mike
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof User
     */
    getPreviewBuilds?: boolean;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof User
     */
    hasAndroidApp?: boolean;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof User
     */
    hasChromeExtension?: boolean;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof User
     */
    hasIosApp?: boolean;
    /**
     * User id
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * Ex: Date the user last logged in
     * @type {string}
     * @memberof User
     */
    lastActive?: string;
    /**
     * Ex: 2009
     * @type {string}
     * @memberof User
     */
    lastFour?: string;
    /**
     * Ex: Sinn
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * Ex: 1
     * @type {string}
     * @memberof User
     */
    lastSmsTrackingReminderNotificationId?: string;
    /**
     * Latest time user should get notifications. Ex: 23:00:00
     * @type {string}
     * @memberof User
     */
    latestReminderTime?: string;
    /**
     * User login name
     * @type {string}
     * @memberof User
     */
    loginName: string;
    /**
     * Ex: PASSWORD
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * Ex: 618-391-0002
     * @type {string}
     * @memberof User
     */
    phoneNumber?: string;
    /**
     * Ex: 1234
     * @type {string}
     * @memberof User
     */
    phoneVerificationCode?: string;
    /**
     * A good primary outcome variable is something that you want to improve and that changes inexplicably. For instance, if you have anxiety, back pain or arthritis which is worse on some days than others, these would be good candidates for primary outcome variables.  Recording their severity and potential factors will help you identify hidden factors exacerbating or improving them. 
     * @type {number}
     * @memberof User
     */
    primaryOutcomeVariableId?: number;
    /**
     * A good primary outcome variable is something that you want to improve and that changes inexplicably. For instance, if you have anxiety, back pain or arthritis which is worse on some days than others, these would be good candidates for primary outcome variables.  Recording their severity and potential factors will help you identify hidden factors exacerbating or improving them. 
     * @type {string}
     * @memberof User
     */
    primaryOutcomeVariableName?: string;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    pushNotificationsEnabled?: boolean;
    /**
     * See https://oauth.net/2/grant-types/refresh-token/
     * @type {string}
     * @memberof User
     */
    refreshToken?: string;
    /**
     * Ex: ["admin"]
     * @type {string}
     * @memberof User
     */
    roles?: string;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    sendPredictorEmails?: boolean;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    sendReminderNotificationEmails?: boolean;
    /**
     * Share all studies, charts, and measurement data with all other users
     * @type {boolean}
     * @memberof User
     */
    shareAllData?: boolean;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof User
     */
    smsNotificationsEnabled?: boolean;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    stripeActive?: boolean;
    /**
     * Ex: cus_A8CEmcvl8jwLhV
     * @type {string}
     * @memberof User
     */
    stripeId?: string;
    /**
     * Ex: monthly7
     * @type {string}
     * @memberof User
     */
    stripePlan?: string;
    /**
     * Ex: sub_ANTx3nOE7nzjQf
     * @type {string}
     * @memberof User
     */
    stripeSubscription?: string;
    /**
     * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof User
     */
    subscriptionEndsAt?: string;
    /**
     * Ex: google
     * @type {string}
     * @memberof User
     */
    subscriptionProvider?: string;
    /**
     * Ex: 300
     * @type {number}
     * @memberof User
     */
    timeZoneOffset?: number;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof User
     */
    trackLocation?: boolean;
    /**
     * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
     * @type {string}
     * @memberof User
     */
    updatedAt?: string;
    /**
     * Ex: 2013-12-03 15:25:13 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof User
     */
    userRegistered?: string;
    /**
     * Ex: https://plus.google.com/+MikeSinn
     * @type {string}
     * @memberof User
     */
    userUrl?: string;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'],
        'accessTokenExpires': !exists(json, 'accessTokenExpires') ? undefined : json['accessTokenExpires'],
        'accessTokenExpiresAtMilliseconds': !exists(json, 'accessTokenExpiresAtMilliseconds') ? undefined : json['accessTokenExpiresAtMilliseconds'],
        'administrator': json['administrator'],
        'authorizedClients': !exists(json, 'authorizedClients') ? undefined : AuthorizedClientsFromJSON(json['authorizedClients']),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'avatarImage': !exists(json, 'avatarImage') ? undefined : json['avatarImage'],
        'capabilities': !exists(json, 'capabilities') ? undefined : json['capabilities'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientUserId': !exists(json, 'clientUserId') ? undefined : json['clientUserId'],
        'combineNotifications': !exists(json, 'combineNotifications') ? undefined : json['combineNotifications'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayName': json['displayName'],
        'earliestReminderTime': !exists(json, 'earliestReminderTime') ? undefined : json['earliestReminderTime'],
        'email': json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'getPreviewBuilds': !exists(json, 'getPreviewBuilds') ? undefined : json['getPreviewBuilds'],
        'hasAndroidApp': !exists(json, 'hasAndroidApp') ? undefined : json['hasAndroidApp'],
        'hasChromeExtension': !exists(json, 'hasChromeExtension') ? undefined : json['hasChromeExtension'],
        'hasIosApp': !exists(json, 'hasIosApp') ? undefined : json['hasIosApp'],
        'id': json['id'],
        'lastActive': !exists(json, 'lastActive') ? undefined : json['lastActive'],
        'lastFour': !exists(json, 'lastFour') ? undefined : json['lastFour'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'lastSmsTrackingReminderNotificationId': !exists(json, 'lastSmsTrackingReminderNotificationId') ? undefined : json['lastSmsTrackingReminderNotificationId'],
        'latestReminderTime': !exists(json, 'latestReminderTime') ? undefined : json['latestReminderTime'],
        'loginName': json['loginName'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneVerificationCode': !exists(json, 'phoneVerificationCode') ? undefined : json['phoneVerificationCode'],
        'primaryOutcomeVariableId': !exists(json, 'primaryOutcomeVariableId') ? undefined : json['primaryOutcomeVariableId'],
        'primaryOutcomeVariableName': !exists(json, 'primaryOutcomeVariableName') ? undefined : json['primaryOutcomeVariableName'],
        'pushNotificationsEnabled': !exists(json, 'pushNotificationsEnabled') ? undefined : json['pushNotificationsEnabled'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'sendPredictorEmails': !exists(json, 'sendPredictorEmails') ? undefined : json['sendPredictorEmails'],
        'sendReminderNotificationEmails': !exists(json, 'sendReminderNotificationEmails') ? undefined : json['sendReminderNotificationEmails'],
        'shareAllData': !exists(json, 'shareAllData') ? undefined : json['shareAllData'],
        'smsNotificationsEnabled': !exists(json, 'smsNotificationsEnabled') ? undefined : json['smsNotificationsEnabled'],
        'stripeActive': !exists(json, 'stripeActive') ? undefined : json['stripeActive'],
        'stripeId': !exists(json, 'stripeId') ? undefined : json['stripeId'],
        'stripePlan': !exists(json, 'stripePlan') ? undefined : json['stripePlan'],
        'stripeSubscription': !exists(json, 'stripeSubscription') ? undefined : json['stripeSubscription'],
        'subscriptionEndsAt': !exists(json, 'subscriptionEndsAt') ? undefined : json['subscriptionEndsAt'],
        'subscriptionProvider': !exists(json, 'subscriptionProvider') ? undefined : json['subscriptionProvider'],
        'timeZoneOffset': !exists(json, 'timeZoneOffset') ? undefined : json['timeZoneOffset'],
        'trackLocation': !exists(json, 'trackLocation') ? undefined : json['trackLocation'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userRegistered': !exists(json, 'userRegistered') ? undefined : json['userRegistered'],
        'userUrl': !exists(json, 'userUrl') ? undefined : json['userUrl'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessToken': value.accessToken,
        'accessTokenExpires': value.accessTokenExpires,
        'accessTokenExpiresAtMilliseconds': value.accessTokenExpiresAtMilliseconds,
        'administrator': value.administrator,
        'authorizedClients': AuthorizedClientsToJSON(value.authorizedClients),
        'avatar': value.avatar,
        'avatarImage': value.avatarImage,
        'capabilities': value.capabilities,
        'card': CardToJSON(value.card),
        'clientId': value.clientId,
        'clientUserId': value.clientUserId,
        'combineNotifications': value.combineNotifications,
        'createdAt': value.createdAt,
        'description': value.description,
        'displayName': value.displayName,
        'earliestReminderTime': value.earliestReminderTime,
        'email': value.email,
        'firstName': value.firstName,
        'getPreviewBuilds': value.getPreviewBuilds,
        'hasAndroidApp': value.hasAndroidApp,
        'hasChromeExtension': value.hasChromeExtension,
        'hasIosApp': value.hasIosApp,
        'id': value.id,
        'lastActive': value.lastActive,
        'lastFour': value.lastFour,
        'lastName': value.lastName,
        'lastSmsTrackingReminderNotificationId': value.lastSmsTrackingReminderNotificationId,
        'latestReminderTime': value.latestReminderTime,
        'loginName': value.loginName,
        'password': value.password,
        'phoneNumber': value.phoneNumber,
        'phoneVerificationCode': value.phoneVerificationCode,
        'primaryOutcomeVariableId': value.primaryOutcomeVariableId,
        'primaryOutcomeVariableName': value.primaryOutcomeVariableName,
        'pushNotificationsEnabled': value.pushNotificationsEnabled,
        'refreshToken': value.refreshToken,
        'roles': value.roles,
        'sendPredictorEmails': value.sendPredictorEmails,
        'sendReminderNotificationEmails': value.sendReminderNotificationEmails,
        'shareAllData': value.shareAllData,
        'smsNotificationsEnabled': value.smsNotificationsEnabled,
        'stripeActive': value.stripeActive,
        'stripeId': value.stripeId,
        'stripePlan': value.stripePlan,
        'stripeSubscription': value.stripeSubscription,
        'subscriptionEndsAt': value.subscriptionEndsAt,
        'subscriptionProvider': value.subscriptionProvider,
        'timeZoneOffset': value.timeZoneOffset,
        'trackLocation': value.trackLocation,
        'updatedAt': value.updatedAt,
        'userRegistered': value.userRegistered,
        'userUrl': value.userUrl,
    };
}


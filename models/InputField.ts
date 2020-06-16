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
    Button,
    ButtonFromJSON,
    ButtonFromJSONTyped,
    ButtonToJSON,
} from './';

/**
 * 
 * @export
 * @interface InputField
 */
export interface InputField {
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    displayName: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    helpText?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    hint?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    icon?: string;
    /**
     * HTML element id
     * @type {string}
     * @memberof InputField
     */
    id?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    image?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    key?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    labelLeft?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    labelRight?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    link?: string;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    maxLength?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    maxValue?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    minLength?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    minValue?: number;
    /**
     * Selector list options
     * @type {Array<string>}
     * @memberof InputField
     */
    options?: Array<string>;
    /**
     * Ex: Title
     * @type {string}
     * @memberof InputField
     */
    placeholder?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    postUrl?: string;
    /**
     * What do you expect?
     * @type {boolean}
     * @memberof InputField
     */
    required?: boolean;
    /**
     * Ex: Title
     * @type {boolean}
     * @memberof InputField
     */
    show?: boolean;
    /**
     * 
     * @type {Button}
     * @memberof InputField
     */
    submitButton?: Button;
    /**
     * Ex: Title
     * @type {string}
     * @memberof InputField
     */
    type: InputFieldTypeEnum;
    /**
     * See http://html5pattern.com/ for examples
     * @type {string}
     * @memberof InputField
     */
    validationPattern?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    value?: string;
}

export function InputFieldFromJSON(json: any): InputField {
    return InputFieldFromJSONTyped(json, false);
}

export function InputFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): InputField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': json['displayName'],
        'helpText': !exists(json, 'helpText') ? undefined : json['helpText'],
        'hint': !exists(json, 'hint') ? undefined : json['hint'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'labelLeft': !exists(json, 'labelLeft') ? undefined : json['labelLeft'],
        'labelRight': !exists(json, 'labelRight') ? undefined : json['labelRight'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'maxValue': !exists(json, 'maxValue') ? undefined : json['maxValue'],
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'minValue': !exists(json, 'minValue') ? undefined : json['minValue'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'postUrl': !exists(json, 'postUrl') ? undefined : json['postUrl'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'show': !exists(json, 'show') ? undefined : json['show'],
        'submitButton': !exists(json, 'submitButton') ? undefined : ButtonFromJSON(json['submitButton']),
        'type': json['type'],
        'validationPattern': !exists(json, 'validationPattern') ? undefined : json['validationPattern'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function InputFieldToJSON(value?: InputField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'helpText': value.helpText,
        'hint': value.hint,
        'icon': value.icon,
        'id': value.id,
        'image': value.image,
        'key': value.key,
        'labelLeft': value.labelLeft,
        'labelRight': value.labelRight,
        'link': value.link,
        'maxLength': value.maxLength,
        'maxValue': value.maxValue,
        'minLength': value.minLength,
        'minValue': value.minValue,
        'options': value.options,
        'placeholder': value.placeholder,
        'postUrl': value.postUrl,
        'required': value.required,
        'show': value.show,
        'submitButton': ButtonToJSON(value.submitButton),
        'type': value.type,
        'validationPattern': value.validationPattern,
        'value': value.value,
    };
}

/**
* @export
* @enum {string}
*/
export enum InputFieldTypeEnum {
    CheckBox = 'check_box',
    Date = 'date',
    Email = 'email',
    Number = 'number',
    PostalCode = 'postal_code',
    SelectOption = 'select_option',
    String = 'string',
    Switch = 'switch',
    TextArea = 'text_area',
    Unit = 'unit',
    VariableCategory = 'variable_category'
}


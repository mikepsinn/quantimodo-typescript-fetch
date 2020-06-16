"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("../runtime");
const _1 = require("./");
function JsonErrorResponseFromJSON(json) {
    return JsonErrorResponseFromJSONTyped(json, false);
}
exports.JsonErrorResponseFromJSON = JsonErrorResponseFromJSON;
function JsonErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'description': !runtime_1.exists(json, 'description') ? undefined : json['description'],
        'summary': !runtime_1.exists(json, 'summary') ? undefined : json['summary'],
        'errors': !runtime_1.exists(json, 'errors') ? undefined : json['errors'],
        'status': json['status'],
        'success': !runtime_1.exists(json, 'success') ? undefined : json['success'],
        'code': !runtime_1.exists(json, 'code') ? undefined : json['code'],
        'link': !runtime_1.exists(json, 'link') ? undefined : json['link'],
        'card': !runtime_1.exists(json, 'card') ? undefined : _1.CardFromJSON(json['card']),
    };
}
exports.JsonErrorResponseFromJSONTyped = JsonErrorResponseFromJSONTyped;
function JsonErrorResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': _1.CardToJSON(value.card),
    };
}
exports.JsonErrorResponseToJSON = JsonErrorResponseToJSON;
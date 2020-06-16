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
function VariableCategoryFromJSON(json) {
    return VariableCategoryFromJSONTyped(json, false);
}
exports.VariableCategoryFromJSON = VariableCategoryFromJSON;
function VariableCategoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appType': !runtime_1.exists(json, 'appType') ? undefined : json['appType'],
        'causeOnly': !runtime_1.exists(json, 'causeOnly') ? undefined : json['causeOnly'],
        'combinationOperation': !runtime_1.exists(json, 'combinationOperation') ? undefined : json['combinationOperation'],
        'createdTime': !runtime_1.exists(json, 'createdTime') ? undefined : json['createdTime'],
        'unitAbbreviatedName': !runtime_1.exists(json, 'unitAbbreviatedName') ? undefined : json['unitAbbreviatedName'],
        'unitId': !runtime_1.exists(json, 'unitId') ? undefined : json['unitId'],
        'durationOfAction': !runtime_1.exists(json, 'durationOfAction') ? undefined : json['durationOfAction'],
        'fillingValue': !runtime_1.exists(json, 'fillingValue') ? undefined : json['fillingValue'],
        'helpText': !runtime_1.exists(json, 'helpText') ? undefined : json['helpText'],
        'id': !runtime_1.exists(json, 'id') ? undefined : json['id'],
        'imageUrl': !runtime_1.exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'ionIcon': !runtime_1.exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'manualTracking': !runtime_1.exists(json, 'manualTracking') ? undefined : json['manualTracking'],
        'maximumAllowedValue': !runtime_1.exists(json, 'maximumAllowedValue') ? undefined : json['maximumAllowedValue'],
        'measurementSynonymSingularLowercase': !runtime_1.exists(json, 'measurementSynonymSingularLowercase') ? undefined : json['measurementSynonymSingularLowercase'],
        'minimumAllowedValue': !runtime_1.exists(json, 'minimumAllowedValue') ? undefined : json['minimumAllowedValue'],
        'moreInfo': !runtime_1.exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'name': json['name'],
        'onsetDelay': !runtime_1.exists(json, 'onsetDelay') ? undefined : json['onsetDelay'],
        'outcome': !runtime_1.exists(json, 'outcome') ? undefined : json['outcome'],
        'pngPath': !runtime_1.exists(json, 'pngPath') ? undefined : json['pngPath'],
        'pngUrl': !runtime_1.exists(json, 'pngUrl') ? undefined : json['pngUrl'],
        '_public': !runtime_1.exists(json, 'public') ? undefined : json['public'],
        'svgPath': !runtime_1.exists(json, 'svgPath') ? undefined : json['svgPath'],
        'svgUrl': !runtime_1.exists(json, 'svgUrl') ? undefined : json['svgUrl'],
        'updated': !runtime_1.exists(json, 'updated') ? undefined : json['updated'],
        'updatedTime': !runtime_1.exists(json, 'updatedTime') ? undefined : json['updatedTime'],
        'variableCategoryName': !runtime_1.exists(json, 'variableCategoryName') ? undefined : json['variableCategoryName'],
        'variableCategoryNameSingular': !runtime_1.exists(json, 'variableCategoryNameSingular') ? undefined : json['variableCategoryNameSingular'],
    };
}
exports.VariableCategoryFromJSONTyped = VariableCategoryFromJSONTyped;
function VariableCategoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appType': value.appType,
        'causeOnly': value.causeOnly,
        'combinationOperation': value.combinationOperation,
        'createdTime': value.createdTime,
        'unitAbbreviatedName': value.unitAbbreviatedName,
        'unitId': value.unitId,
        'durationOfAction': value.durationOfAction,
        'fillingValue': value.fillingValue,
        'helpText': value.helpText,
        'id': value.id,
        'imageUrl': value.imageUrl,
        'ionIcon': value.ionIcon,
        'manualTracking': value.manualTracking,
        'maximumAllowedValue': value.maximumAllowedValue,
        'measurementSynonymSingularLowercase': value.measurementSynonymSingularLowercase,
        'minimumAllowedValue': value.minimumAllowedValue,
        'moreInfo': value.moreInfo,
        'name': value.name,
        'onsetDelay': value.onsetDelay,
        'outcome': value.outcome,
        'pngPath': value.pngPath,
        'pngUrl': value.pngUrl,
        'public': value._public,
        'svgPath': value.svgPath,
        'svgUrl': value.svgUrl,
        'updated': value.updated,
        'updatedTime': value.updatedTime,
        'variableCategoryName': value.variableCategoryName,
        'variableCategoryNameSingular': value.variableCategoryNameSingular,
    };
}
exports.VariableCategoryToJSON = VariableCategoryToJSON;
/**
* @export
* @enum {string}
*/
var VariableCategoryVariableCategoryNameEnum;
(function (VariableCategoryVariableCategoryNameEnum) {
    VariableCategoryVariableCategoryNameEnum["Activity"] = "Activity";
    VariableCategoryVariableCategoryNameEnum["Books"] = "Books";
    VariableCategoryVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    VariableCategoryVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    VariableCategoryVariableCategoryNameEnum["Conditions"] = "Conditions";
    VariableCategoryVariableCategoryNameEnum["Emotions"] = "Emotions";
    VariableCategoryVariableCategoryNameEnum["Environment"] = "Environment";
    VariableCategoryVariableCategoryNameEnum["Foods"] = "Foods";
    VariableCategoryVariableCategoryNameEnum["Goals"] = "Goals";
    VariableCategoryVariableCategoryNameEnum["Locations"] = "Locations";
    VariableCategoryVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    VariableCategoryVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    VariableCategoryVariableCategoryNameEnum["Music"] = "Music";
    VariableCategoryVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    VariableCategoryVariableCategoryNameEnum["Payments"] = "Payments";
    VariableCategoryVariableCategoryNameEnum["PhysicalActivities"] = "Physical Activities";
    VariableCategoryVariableCategoryNameEnum["Physique"] = "Physique";
    VariableCategoryVariableCategoryNameEnum["Sleep"] = "Sleep";
    VariableCategoryVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    VariableCategoryVariableCategoryNameEnum["Software"] = "Software";
    VariableCategoryVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    VariableCategoryVariableCategoryNameEnum["Treatments"] = "Treatments";
    VariableCategoryVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
})(VariableCategoryVariableCategoryNameEnum = exports.VariableCategoryVariableCategoryNameEnum || (exports.VariableCategoryVariableCategoryNameEnum = {}));
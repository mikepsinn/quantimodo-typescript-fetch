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
function StudyChartsFromJSON(json) {
    return StudyChartsFromJSONTyped(json, false);
}
exports.StudyChartsFromJSON = StudyChartsFromJSON;
function StudyChartsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'populationTraitScatterPlot': !runtime_1.exists(json, 'populationTraitScatterPlot') ? undefined : _1.ChartFromJSON(json['populationTraitScatterPlot']),
        'outcomeDistributionColumnChart': !runtime_1.exists(json, 'outcomeDistributionColumnChart') ? undefined : _1.ChartFromJSON(json['outcomeDistributionColumnChart']),
        'predictorDistributionColumnChart': !runtime_1.exists(json, 'predictorDistributionColumnChart') ? undefined : _1.ChartFromJSON(json['predictorDistributionColumnChart']),
        'correlationScatterPlot': !runtime_1.exists(json, 'correlationScatterPlot') ? undefined : _1.ChartFromJSON(json['correlationScatterPlot']),
        'pairsOverTimeLineChart': !runtime_1.exists(json, 'pairsOverTimeLineChart') ? undefined : _1.ChartFromJSON(json['pairsOverTimeLineChart']),
    };
}
exports.StudyChartsFromJSONTyped = StudyChartsFromJSONTyped;
function StudyChartsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'populationTraitScatterPlot': _1.ChartToJSON(value.populationTraitScatterPlot),
        'outcomeDistributionColumnChart': _1.ChartToJSON(value.outcomeDistributionColumnChart),
        'predictorDistributionColumnChart': _1.ChartToJSON(value.predictorDistributionColumnChart),
        'correlationScatterPlot': _1.ChartToJSON(value.correlationScatterPlot),
        'pairsOverTimeLineChart': _1.ChartToJSON(value.pairsOverTimeLineChart),
    };
}
exports.StudyChartsToJSON = StudyChartsToJSON;
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
import { ConversionStep, UnitCategory } from './';
/**
 *
 * @export
 * @interface Unit
 */
export interface Unit {
    /**
     * Unit abbreviation
     * @type {string}
     * @memberof Unit
     */
    abbreviatedName: string;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Unit
     */
    advanced?: number;
    /**
     * Unit category
     * @type {string}
     * @memberof Unit
     */
    category: UnitCategoryEnum;
    /**
     * Ex: 6
     * @type {number}
     * @memberof Unit
     */
    categoryId?: number;
    /**
     * Ex: Miscellany
     * @type {string}
     * @memberof Unit
     */
    categoryName?: string;
    /**
     * Conversion steps list
     * @type {Array<ConversionStep>}
     * @memberof Unit
     */
    conversionSteps: Array<ConversionStep>;
    /**
     * Ex: 29
     * @type {number}
     * @memberof Unit
     */
    id?: number;
    /**
     * Ex: 0
     * @type {number}
     * @memberof Unit
     */
    manualTracking?: number;
    /**
     * The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.
     * @type {number}
     * @memberof Unit
     */
    maximumAllowedValue?: number;
    /**
     * Ex: 4
     * @type {number}
     * @memberof Unit
     */
    maximumValue: number;
    /**
     * The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.
     * @type {number}
     * @memberof Unit
     */
    minimumAllowedValue?: number;
    /**
     * Ex: 0
     * @type {number}
     * @memberof Unit
     */
    minimumValue?: number;
    /**
     * Unit name
     * @type {string}
     * @memberof Unit
     */
    name: string;
    /**
     *
     * @type {UnitCategory}
     * @memberof Unit
     */
    unitCategory: UnitCategory;
}
export declare function UnitFromJSON(json: any): Unit;
export declare function UnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unit;
export declare function UnitToJSON(value?: Unit | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UnitCategoryEnum {
    Distance = "Distance",
    Duration = "Duration",
    Energy = "Energy",
    Frequency = "Frequency",
    Miscellany = "Miscellany",
    Pressure = "Pressure",
    Proportion = "Proportion",
    Rating = "Rating",
    Temperature = "Temperature",
    Volume = "Volume",
    Weight = "Weight",
    Count = "Count"
}
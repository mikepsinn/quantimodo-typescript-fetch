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
import * as runtime from '../runtime';
import { Unit, UnitCategory } from '../models';
/**
 *
 */
export declare class UnitsApi extends runtime.BaseAPI {
    /**
     * Get a list of the categories of measurement units such as \'Distance\', \'Duration\', \'Energy\', \'Frequency\', \'Miscellany\', \'Pressure\', \'Proportion\', \'Rating\', \'Temperature\', \'Volume\', and \'Weight\'.
     * Get unit categories
     */
    getUnitCategoriesRaw(): Promise<runtime.ApiResponse<Array<UnitCategory>>>;
    /**
     * Get a list of the categories of measurement units such as \'Distance\', \'Duration\', \'Energy\', \'Frequency\', \'Miscellany\', \'Pressure\', \'Proportion\', \'Rating\', \'Temperature\', \'Volume\', and \'Weight\'.
     * Get unit categories
     */
    getUnitCategories(): Promise<Array<UnitCategory>>;
    /**
     * Get a list of the available measurement units
     * Get units
     */
    getUnitsRaw(): Promise<runtime.ApiResponse<Array<Unit>>>;
    /**
     * Get a list of the available measurement units
     * Get units
     */
    getUnits(): Promise<Array<Unit>>;
}
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class DefaultApi extends runtime.BaseAPI {
    /**
     * Uploads a file.
     */
    v2UploadPostRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const consumes = [
                { contentType: 'multipart/form-data' },
            ];
            // @ts-ignore: canConsumeForm may be unused
            const canConsumeForm = runtime.canConsumeForm(consumes);
            let formParams;
            let useForm = false;
            // use FormData to transmit files using content-type "multipart/form-data"
            useForm = canConsumeForm;
            if (useForm) {
                formParams = new FormData();
            }
            else {
                formParams = new URLSearchParams();
            }
            if (requestParameters.upfile !== undefined) {
                formParams.append('upfile', requestParameters.upfile);
            }
            const response = yield this.request({
                path: `/v2/upload`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.PostUploadResponseFromJSON(jsonValue));
        });
    }
    /**
     * Uploads a file.
     */
    v2UploadPost(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.v2UploadPostRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.DefaultApi = DefaultApi;
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BitadventurerApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Pet {
    interface Options {
        environment?: core.Supplier<environments.BitadventurerApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the api_key header */
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the api_key header */
        apiKey?: string;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * Everything about your Pets
 */
export class Pet {
    constructor(protected readonly _options: Pet.Options) {}

    /**
     * Add a new pet to the store
     *
     * @param {BitadventurerApi.Pet} request
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.MethodNotAllowedError}
     *
     * @example
     *     await client.pet.addPet({
     *         name: "doggie",
     *         photoUrls: ["photoUrls"]
     *     })
     */
    public addPet(
        request: BitadventurerApi.Pet,
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<BitadventurerApi.Pet> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        "pet"
                    ),
                    method: "POST",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/x-www-form-urlencoded",
                    requestType: "json",
                    body: serializers.Pet.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.Pet.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 405:
                            throw new BitadventurerApi.MethodNotAllowedError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError("Timeout exceeded when calling POST /pet.");
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Update an existing pet by Id
     *
     * @param {BitadventurerApi.Pet} request
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.BadRequestError}
     * @throws {@link BitadventurerApi.NotFoundError}
     * @throws {@link BitadventurerApi.MethodNotAllowedError}
     *
     * @example
     *     await client.pet.updatePet({
     *         name: "doggie",
     *         photoUrls: ["photoUrls"]
     *     })
     */
    public updatePet(
        request: BitadventurerApi.Pet,
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<BitadventurerApi.Pet> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        "pet"
                    ),
                    method: "PUT",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/x-www-form-urlencoded",
                    requestType: "json",
                    body: serializers.Pet.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.Pet.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 400:
                            throw new BitadventurerApi.BadRequestError(_response.error.body);
                        case 404:
                            throw new BitadventurerApi.NotFoundError(_response.error.body);
                        case 405:
                            throw new BitadventurerApi.MethodNotAllowedError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError("Timeout exceeded when calling PUT /pet.");
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Multiple status values can be provided with comma separated strings
     *
     * @param {BitadventurerApi.FindPetsByStatusRequest} request
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.BadRequestError}
     *
     * @example
     *     await client.pet.findPetsByStatus()
     */
    public findPetsByStatus(
        request: BitadventurerApi.FindPetsByStatusRequest = {},
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<BitadventurerApi.Pet[]> {
        return core.APIPromise.from(
            (async () => {
                const { status } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (status != null) {
                    _queryParams["status"] = status;
                }
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        "pet/findByStatus"
                    ),
                    method: "GET",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.pet.findPetsByStatus.Response.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 400:
                            throw new BitadventurerApi.BadRequestError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling GET /pet/findByStatus."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @param {BitadventurerApi.FindPetsByTagsRequest} request
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.BadRequestError}
     *
     * @example
     *     await client.pet.findPetsByTags()
     */
    public findPetsByTags(
        request: BitadventurerApi.FindPetsByTagsRequest = {},
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<BitadventurerApi.Pet[]> {
        return core.APIPromise.from(
            (async () => {
                const { tags } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (tags != null) {
                    if (Array.isArray(tags)) {
                        _queryParams["tags"] = tags.map((item) => item);
                    } else {
                        _queryParams["tags"] = tags;
                    }
                }
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        "pet/findByTags"
                    ),
                    method: "GET",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.pet.findPetsByTags.Response.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 400:
                            throw new BitadventurerApi.BadRequestError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling GET /pet/findByTags."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Returns a single pet
     *
     * @param {number} petId - ID of pet to return
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.BadRequestError}
     * @throws {@link BitadventurerApi.NotFoundError}
     *
     * @example
     *     await client.pet.getPetById(1000000)
     */
    public getPetById(petId: number, requestOptions?: Pet.RequestOptions): core.APIPromise<BitadventurerApi.Pet> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        `pet/${encodeURIComponent(petId)}`
                    ),
                    method: "GET",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.Pet.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 400:
                            throw new BitadventurerApi.BadRequestError(_response.error.body);
                        case 404:
                            throw new BitadventurerApi.NotFoundError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling GET /pet/{petId}."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     *
     *
     * @param {number} petId - ID of pet that needs to be updated
     * @param {BitadventurerApi.UpdatePetWithFormRequest} request
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.MethodNotAllowedError}
     *
     * @example
     *     await client.pet.updatePetWithForm(1000000)
     */
    public updatePetWithForm(
        petId: number,
        request: BitadventurerApi.UpdatePetWithFormRequest = {},
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const { name, status } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (name != null) {
                    _queryParams["name"] = name;
                }
                if (status != null) {
                    _queryParams["status"] = status;
                }
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        `pet/${encodeURIComponent(petId)}`
                    ),
                    method: "POST",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 405:
                            throw new BitadventurerApi.MethodNotAllowedError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling POST /pet/{petId}."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     *
     *
     * @param {number} petId - Pet id to delete
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BitadventurerApi.BadRequestError}
     *
     * @example
     *     await client.pet.deletePet(1000000)
     */
    public deletePet(petId: number, requestOptions?: Pet.RequestOptions): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        `pet/${encodeURIComponent(petId)}`
                    ),
                    method: "DELETE",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 400:
                            throw new BitadventurerApi.BadRequestError(_response.error.body);
                        default:
                            throw new errors.BitadventurerApiError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling DELETE /pet/{petId}."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     *
     *
     * @param {File | fs.ReadStream | Blob} bytes
     * @param {number} petId
     * @param {Pet.RequestOptions} requestOptions - Request-specific configuration.
     */
    public uploadFile(
        bytes: File | fs.ReadStream | Blob,
        petId: number,
        requestOptions?: Pet.RequestOptions
    ): core.APIPromise<BitadventurerApi.ApiResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.BitadventurerApiEnvironment.Default,
                        `pet/${encodeURIComponent(petId)}/uploadImage`
                    ),
                    method: "POST",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        api_key: await core.Supplier.get(this._options.apiKey),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "fern-swagger-petstore",
                        "X-Fern-SDK-Version": "0.0.316",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/octet-stream",
                    requestType: "bytes",
                    duplex: "half",
                    body: bytes,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.ApiResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.BitadventurerApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.BitadventurerApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.BitadventurerApiTimeoutError(
                            "Timeout exceeded when calling POST /pet/{petId}/uploadImage."
                        );
                    case "unknown":
                        throw new errors.BitadventurerApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}

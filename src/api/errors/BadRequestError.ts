/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";

export class BadRequestError extends errors.BitadventurerApiError {
    constructor(body?: unknown) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

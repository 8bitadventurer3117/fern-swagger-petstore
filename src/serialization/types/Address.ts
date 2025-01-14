/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BitadventurerApi from "../../api/index";
import * as core from "../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, BitadventurerApi.Address> =
    core.serialization.object({
        street: core.serialization.string().optional(),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        zip: core.serialization.string().optional(),
    });

export declare namespace Address {
    interface Raw {
        street?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
    }
}

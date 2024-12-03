/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BitadventurerApi from "../../api/index";
import * as core from "../../core";

export const OrderStatus: core.serialization.Schema<serializers.OrderStatus.Raw, BitadventurerApi.OrderStatus> =
    core.serialization.enum_(["placed", "approved", "delivered"]);

export declare namespace OrderStatus {
    type Raw = "placed" | "approved" | "delivered";
}
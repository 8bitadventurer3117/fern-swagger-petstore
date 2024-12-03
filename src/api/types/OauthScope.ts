/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type OauthScope =
    /**
     * modify pets in your account */
    | "write:pets"
    /**
     * read your pets */
    | "read:pets";

export const OauthScope = {
    WritePets: "write:pets",
    ReadPets: "read:pets",
} as const;
import { AuthOpts } from "@vonage/auth";
import { AuthInterface } from "@vonage/auth";
import { VetchOptions } from "@vonage/vetch";

export type VideoClassParameters = AuthOpts & VetchOptions & {
    applicationId: string
    privateKey: string
    auth?: AuthInterface
}
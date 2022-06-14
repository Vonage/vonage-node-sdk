import { ImageObject } from "./ImageObject";
import { MessageObject } from "./MessageObject";

export interface ImageMessage extends MessageObject {
    message_type: string;
    image: ImageObject;
}
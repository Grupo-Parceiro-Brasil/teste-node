import { Channel } from "./Channel";
import { Target } from "./Target";

export interface Command {
    channel: Channel;
    target: Target;
}
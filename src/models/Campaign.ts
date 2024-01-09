import { Channel } from "./Channel";
import { Target } from "./Target";

export interface Campaign {
    channels: Channel[];
    targets: Target[];
}
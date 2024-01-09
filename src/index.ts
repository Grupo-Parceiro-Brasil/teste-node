import { CHANNELS, PEOPLE_NAMES } from "./mock";
import { Campaign } from "./models/Campaign";
import { assert, getCommands, send } from "./services";

const campaign = {
    channels: CHANNELS,
    targets: PEOPLE_NAMES.map(name => {
        return { name }
    })
} as Campaign;

const commands = getCommands(campaign);

commands.forEach(command => {
    send(command);
});

assert(commands);

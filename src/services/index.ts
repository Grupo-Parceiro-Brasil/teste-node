import { CHANNELS, PEOPLE_NAMES } from "../mock";
import { Campaign } from "../models/Campaign";
import { Command } from "../models/Command";

export const send = async ({ channel, target }: Command) => {
    await new Promise<void>(resolve => {
        setTimeout(() => {
            console.log(`Sending message to ${target.name} via ${channel.id}`);
            resolve();
        }, 100);
    })
}

export const assert = (commands: Command[]) => {
    CHANNELS.forEach(channel => {
        console.log(`${commands.filter(c => c.channel.id === channel.id).length} from channel ${channel.id}`);
    })
}

export const getCommands = (campaign: Campaign): Command[] => {
    // Não funciona corretamente, corrija aqui!
    return PEOPLE_NAMES.map(() => {
        return {
            channel: { id: 1 },
            target: campaign.targets[0]
        } as Command;
    });
}
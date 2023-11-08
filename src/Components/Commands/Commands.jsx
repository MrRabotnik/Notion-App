import { createCommand, COMMAND_PRIORITY_NORMAL } from "lexical";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const DO_SOMETHING_AWESOME = createCommand("create_banner");

export const HELLO_WORLD_COMMAND = createCommand("FORMAT_HEADING_COMMAND");


export const CustomComponent = () => {
    const [editor] = useLexicalComposerContext();

    editor.registerCommand(
        HELLO_WORLD_COMMAND,
        (payload) => {
            console.log(payload); // Hello World!
            return true;
        }, COMMAND_PRIORITY_NORMAL
    );

    return null;
};




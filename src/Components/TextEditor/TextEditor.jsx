import React from 'react';
import {
    // $getRoot,
    // $getSelection,
    // $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    // ElementFormatType,
    // OUTDENT_CONTENT_COMMAND,
    // INDENT_CONTENT_COMMAND
} from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as Commands from "../Commands/Commands"

library.add(fas)

function onChange(state) {
    state.read(() => {
        // const root = $getRoot();
        // const selection = $getSelection();
        // console.log(selection);
    });
}

const Toolbar = () => {
    const [editor] = useLexicalComposerContext();

    const handleOnClick = (formatType) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType)
    }

    return (
        <div className="toolbar padding" >
            {[
                'bold',
                'italic',
                'underline',
                'code',
                'highlight',
                'strikethrough',
                'subscript',
                'superscript'
            ].map(value => {
                const icon = value === "highlight" ? "highlighter" : value
                return (
                    <button
                        key={value}
                        onClick={() => handleOnClick(value)}>
                        <FontAwesomeIcon icon={`fa-solid fa-${icon}`} />
                    </button>
                )
            })}
            <button
                onClick={() => {
                    editor.dispatchCommand(Commands.HELLO_WORLD_COMMAND, 'Hello World!');
                }}
            >
                <FontAwesomeIcon icon="fa-solid fa-house" />
            </button>
            {/* <button
                onClick={() => editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)}>
                Outdent
            </button>
            <button
                onClick={() => editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)}>
                Indent
            </button> */}
        </div>
    );
};

const lexicalConfig = {
    namespace: 'My Rich Text Editor',
    theme: {
        text: {
            bold: "text-bold",
            italic: "text-italic",
            underline: "text-underline",
            code: 'text-code',
            highlight: 'text-highlight',
            strikethrough: 'text-strikethrough',
            subscript: 'text-subscript',
            superscript: 'text-superscript',
        },
    },
    onError: (e) => {
        console.log('ERROR:', e)
    },
}

export const Editor = () => {
    return (
        <div className='bg-white relative rounded-sm'>
            <LexicalComposer initialConfig={lexicalConfig}>
                <Toolbar />
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable className="textarea padding" />
                    }
                    placeholder={<div className="padding">Enter some text...</div>}
                />
                <Commands.CustomComponent></Commands.CustomComponent>
                <OnChangePlugin onChange={onChange} />
                <HistoryPlugin />
            </LexicalComposer>
        </div>
    )
}
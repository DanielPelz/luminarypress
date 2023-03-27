import React, { useState } from 'react';
import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromElement } from 'draft-js-import-element';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
];

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Strikethrough', style: 'STRIKETHROUGH' },
  { label: 'Code', style: 'CODE' },
];

const ContentEditor = ({ initialContent, onSave }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      const contentElement = new DOMParser().parseFromString(initialContent, 'text/html').body;
      const contentState = stateFromElement(contentElement);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = stateToHTML(contentState);
    onSave(rawContent, htmlContent);
  };

  return (
    <div className="content-editor">
      <div className="toolbar">
        {BLOCK_TYPES.map((type) => (
          <button
            key={type.label}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleBlockType(type.style);
            }}
          >
            {type.label}
          </button>
        ))}
        {INLINE_STYLES.map((type) => (
          <button
            key={type.label}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleInlineStyle(type.style);
            }}
          >
            {type.label}
          </button>
        ))}
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={mapKeyToEditorCommand}
        onChange={setEditorState}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          inline: { inDropdown: false },
          list: { inDropdown: false },
          textAlign: { inDropdown: false },
          link: { inDropdown: false },
          history: { inDropdown: false },
        }}
      />
      <button onClick={saveContent}>Save</button>
    </div>
  );
};

export default ContentEditor;
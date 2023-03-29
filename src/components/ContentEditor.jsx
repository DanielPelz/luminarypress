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

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = stateToHTML(contentState);
    onSave(rawContent, htmlContent);
  };

  return (
    <div className="content-editor">
      <Editor
       editorState={editorState}
       onChange={setEditorState}
       toolbar={{
       options: [
       'inline',
       'blockType',
       'fontSize',
       'list',
       'textAlign',
       'colorPicker',
       'link',
       'embedded',
       'emoji',
       'image',
       'remove',
       'history',
       ],
       inline: { inDropdown: false },
       blockType: { inDropdown: false },
       list: { inDropdown: false },
       textAlign: { inDropdown: false },
       link: { inDropdown: false },
       history: { inDropdown: false },}}
      />
      <button onClick={saveContent}>Save</button>
    </div>
  );
};

export default ContentEditor;
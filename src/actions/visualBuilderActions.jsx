// Action Types
export const SAVE_CHANGES = "SAVE_CHANGES";
export const PREVIEW_CHANGES = "PREVIEW_CHANGES";
export const PUBLISH_CHANGES = "PUBLISH_CHANGES";
export const UNDO_CHANGES = "UNDO_CHANGES";
export const REDO_CHANGES = "REDO_CHANGES";
export const MOVE_COMPONENT = "MOVE_COMPONENT";
export const SEARCH = "SEARCH";
export const SELECT_COMPONENT = "SELECT_COMPONENT";
export const DESELECT_COMPONENT = "DESELECT_COMPONENT";
export const DELETE_COMPONENT = "DELETE_COMPONENT";


// Action Creators
export const saveChanges = () => ({
  type: SAVE_CHANGES,
});

export const previewChanges = () => ({
  type: PREVIEW_CHANGES,
});

export const publishChanges = () => ({
  type: PUBLISH_CHANGES,
});

export const undoChanges = () => ({
  type: UNDO_CHANGES,
});

export const redoChanges = () => ({
  type: REDO_CHANGES,
});

export const moveComponent = (id, left, top) => ({
  type: MOVE_COMPONENT,
  payload: { id, left, top },
});

export const search = (searchTerm) => ({
  type: SEARCH,
  payload: { searchTerm },
});

export const selectComponent = (id) => ({
  type: SELECT_COMPONENT,
  payload: { id },
});

export const deselectComponent = () => ({
  type: DESELECT_COMPONENT,
});

export const deleteComponent = (id) => ({
  type: DELETE_COMPONENT,
  payload: { id },
});

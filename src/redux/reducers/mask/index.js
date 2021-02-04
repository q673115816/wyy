import {
  SET_CONTEXTMENU_SHOW,
  SET_DIALOG_RESET,
  SET_DIALOG_SHARE_SHOW,
  SET_GLOBAL_INSET,
  SET_DIALOG_SHARE_WX_SHOW,
  SET_DIALOG_UPLOAD_AVATAR_SHOW,
  SET_DIALOG_CREATE_PLAYLIST_SHOW,
  SET_SCREEN_FULL,
} from '@/redux/actionTypes';
import { LOCALSTORAGE } from '@/common/utils';

const globalState = {
  screen: 'normal',
  globalVisibility: false,
  globalLastX: 0,
  globalLastY: 0,
  globalWidth: LOCALSTORAGE('width', 1022),
  globalHeight: LOCALSTORAGE('height', 670),
};

const visibilityState = {
  maskVisibility: false,
  contextMenuVisibility: false,
  dialogShareVisibility: false,
  dialogShareWXVisibility: false,
  dialogUploadAvatarVisibility: false,
  dialogCreatePlaylistVisibility: false,
};

const maskState = {
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuType: '',
  contextMenuItemId: 0,
  contextMenuItem: {},
  contextMenuSechma: [],
};

const shareState = {

};

const initialState = {
  ...globalState, ...visibilityState, ...maskState, ...shareState,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_INSET:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CONTEXTMENU_SHOW:
      return {
        ...state,
        ...visibilityState,
        ...maskState,
        visibility: true,
        contextMenuVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_SHARE_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogShareVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_SHARE_WX_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogShareWXVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_UPLOAD_AVATAR_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogUploadAvatarVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_CREATE_PLAYLIST_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogCreatePlaylistVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_RESET:
      return {
        ...state,
        ...visibilityState,
        ...maskState,
      };

    case SET_SCREEN_FULL:
      return {
        ...state,
        screen: 'full',
      };
    default:
      return state;
  }
};

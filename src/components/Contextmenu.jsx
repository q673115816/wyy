import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  IconMessage,
  IconArrowForward,
  IconPlayerPlay,
  IconFolderPlus,
  IconShare,
  IconLink,
  IconCircleX,
  IconDownload,
  IconCirclePlus,
  IconMusic,
} from '@tabler/icons';
import { setDialogReset, setDialogShareShow, setLoginVisibility } from '@/redux/actions';
import DomMask from './Mask';

export default () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  const {
    globalLastX,
    globalLastY,
    contextMenuX,
    contextMenuY,
    contextMenuItem,
    contextMenuTotal,
  } = useSelector(({ mask }) => mask);
  // console.log(globalLastY, contextMenuY);
  const handleDialogShare = () => {
    if (!isLogin) {
      dispatch(setLoginVisibility());
      return dispatch(setDialogReset());
    }
    dispatch(setDialogShareShow({

    }));
  };
  return (
    <DomMask>
      <ul
        id="contextmenu"
        className="ui_contextmenu"
        style={{ left: contextMenuX - globalLastX, top: contextMenuY - globalLastY }}
      >
        <li className="ui_contextmenu_item">
          <Link
            to={`/comment/${contextMenuItem.id}`}
            onClick={() => dispatch(setDialogReset())}
            className="ui_contextmenu_btn"
          >
            <i className="ico">
              <IconMessage size={22} stroke={1} />
            </i>
            查看评论
            (
            {contextMenuTotal}
            )
          </Link>
        </li>
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn">
            <i className="ico">
              <IconPlayerPlay size={22} stroke={1} />
            </i>
            播放(Enter)
          </button>
        </li>
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn">
            <i className="ico">
              <IconArrowForward size={22} stroke={1} />
            </i>
            下一首播放
          </button>
        </li>
        <li className="hr" />
        <li className="ui_contextmenu_item">
          <span className="ui_contextmenu_btn">
            <i className="ico">
              <IconFolderPlus size={22} stroke={1} />
            </i>
            收藏到歌单(Ctrl+S)
            <i className="arrow" />
          </span>
          <ul className="ui_contextmenu sub">
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconCirclePlus size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
            <li className="hr" />
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconMusic size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconMusic size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
          </ul>
        </li>
        <li className="ui_contextmenu_item">
          <button
            onClick={handleDialogShare}
            type="button"
            className="ui_contextmenu_btn"
          >
            <i className="ico">
              <IconShare size={22} stroke={1} />
            </i>
            分享.....
          </button>
        </li>
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn">
            <i className="ico">
              <IconLink size={22} stroke={1} />
            </i>
            复制链接
          </button>
        </li>
        <li className="ui_contextmenu_item">
          <span className="ui_contextmenu_btn">
            <i className="ico">
              <IconCircleX size={22} stroke={1} />
            </i>
            不感兴趣
            <i className="arrow" />
          </span>
          <ul className="ui_contextmenu sub">
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico" />
                创建新歌单
              </button>
            </li>
            <li className="hr" />
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico" />
                创建新歌单
              </button>
            </li>
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico" />
                创建新歌单
              </button>
            </li>
          </ul>
        </li>
        <li className="ui_contextmenu_item ">
          <span className="ui_contextmenu_btn">
            <i className="ico">
              <IconDownload size={22} stroke={1} />
            </i>
            下载(L)
            <i className="arrow" />
          </span>
          <ul className="ui_contextmenu sub">
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconCirclePlus size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
            <li className="hr" />
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconMusic size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
            <li className="ui_contextmenu_item">
              <button type="button" className="ui_contextmenu_btn">
                <i className="ico"><IconMusic size={22} stroke={1} /></i>
                创建新歌单
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </DomMask>
  );
};
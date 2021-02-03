import React, { useMemo, useState, useCallback } from 'react';
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
import {
  setDialogReset, setDialogShareShow, setLoginVisibilty, setDialogCreatePlaylistShow,
} from '@/redux/actions';
import DomMask from './Mask';

const initBuild = (functionClose) => ({
  评论: ({ contextMenuItem, contextMenuTotal }) => (
    <li className="ui_contextmenu_item">
      <Link
        to={`/comment/${contextMenuItem.id}`}
        onClick={functionClose}
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
  ),
  播放: () => (
    <li className="ui_contextmenu_item">
      <button type="button" className="ui_contextmenu_btn">
        <i className="ico">
          <IconPlayerPlay size={22} stroke={1} />
        </i>
        播放(Enter)
      </button>
    </li>
  ),
  下一首播放: () => (
    <li className="ui_contextmenu_item">
      <button type="button" className="ui_contextmenu_btn">
        <i className="ico">
          <IconArrowForward size={22} stroke={1} />
        </i>
        下一首播放
      </button>
    </li>
  ),
  divide: () => <li className="hr" />,
  收藏到歌单: ({ handleCreatePlaylist }) => (
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
          <button
            type="button"
            onClick={handleCreatePlaylist}
            className="ui_contextmenu_btn"
          >
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
  ),
  分享: ({ handleDialogShare }) => (
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
  ),
  复制链接: ({ handleCopyLink }) => (
    <li className="ui_contextmenu_item">
      <button
        type="button"
        onClick={handleCopyLink}
        className="ui_contextmenu_btn"
      >
        <i className="ico">
          <IconLink size={22} stroke={1} />
        </i>
        复制链接
      </button>
    </li>
  ),
  不感兴趣: ({ }) => (
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
          <button
            type="button"
            className="ui_contextmenu_btn"
          >
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
  ),
  下载: () => (
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
  ),
});

export default () => {
  const dispatch = useDispatch();
  const { isLogin, baseUrl } = useSelector(({ common }) => common);
  const { profile } = useSelector(({ account }) => account);
  const {
    globalLastX,
    globalLastY,
    contextMenuX,
    contextMenuY,
    contextMenuItem,
    contextMenuTotal,
    contextMenuSechma,
    contextMenuType,
    contextMenuItemId,
  } = useSelector(({ mask }) => mask);
  // console.log(globalLastY, contextMenuY);
  const ShareUrl = `${baseUrl}/${contextMenuType}?id=${contextMenuItemId}&userId=${profile.userId}`;

  const handleCopyLink = async () => {
    const data = new DataTransfer();
    data.items.add('text/plain', ShareUrl);
    await navigator.clipboard.writeText(ShareUrl);
    dispatch(setDialogReset());
    alert('链接复制成功');
  };

  const handleCreatePlaylist = () => {
    dispatch(setDialogCreatePlaylistShow());
  };

  const handleDialogShare = useCallback(() => {
    if (!isLogin) {
      dispatch(setLoginVisibilty());
      return dispatch(setDialogReset());
    }
    return dispatch(setDialogShareShow());
  }, []);

  const Build = useMemo(() => {
    const Dom = initBuild(() => dispatch(setDialogReset()));
    return contextMenuSechma.map((item) => [item, Dom[item]]);
  }, []);

  return (
    <DomMask>
      <ul
        id="contextmenu"
        className="ui_contextmenu"
        style={{ left: contextMenuX - globalLastX, top: contextMenuY - globalLastY }}
      >
        {
          Build.map(([item, Dom]) => (
            <Dom
              {...{
                contextMenuTotal,
                contextMenuItem,
                handleDialogShare,
                handleCopyLink,
                handleCreatePlaylist,
              }}
              key={item}
            />
          ))
        }
      </ul>
    </DomMask>
  );
};

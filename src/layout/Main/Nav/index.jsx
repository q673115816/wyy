import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  IconMusic,
  IconCloudDownload,
  IconCloud,
  IconBrandTiktok,
  IconStar,
  IconCaretDown,
  IconCaretRight,
  IconFileMusic,
  IconLock,
} from '@tabler/icons';

const options1 = [
  {
    name: '发现音乐',
    link: '/home',
  },
  {
    name: '视频',
    link: '/video',
  },
  {
    name: '朋友',
    link: '/friend',
  },
  {
    name: '直播',
    link: '/look',
  },
  {
    name: '私人FM',
    link: '/fm',
  },
];

const loginNav = [
  ['我的音乐云盘', '/cloud', IconCloud],
  ['我的电台', '/dj', IconBrandTiktok],
  ['我的收藏', '/sublist', IconStar],
];

const DomPlaylist = ({ name = '', playlist = [] }) => {
  const [showplaylist, setPlaylist] = useState(true);
  return (
    <>
      <div className="dommain_left_dt">
        <div className="playlist_control flex items-center">
          <button
            type="button"
            className="_toggle flex items-center flex-auto"
            onClick={() => setPlaylist(!showplaylist)}
            title={showplaylist ? '收起' : '展开'}
          >
            {name}
            {
              showplaylist
                ? <IconCaretDown size={8} className="fill-current" />
                : <IconCaretRight size={8} className="fill-current" />
            }
          </button>
          <button type="button" title="新建歌单" className="addplaylist">
            +
          </button>
        </div>
      </div>
      <nav
        className="songmenu space-y-0.5"
        style={{ display: showplaylist ? null : 'none' }}
      >
        {
          playlist.map((item) => (
            <NavLink
              key={item.id}
              className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
              activeClassName="bg-gray-100"
              to={`/playlist/music/${item.id}`}
            >
              {
                item.privacy === 10
                  ? <IconLock size={20} stroke={1} className="flex-none mr-1" />
                  : <IconMusic size={20} stroke={1} className="flex-none mr-1" />
              }
              <span className="truncate">
                {item.name}
              </span>
            </NavLink>
          ))
        }
      </nav>
    </>
  );
};

export default () => {
  const { profile, playlist } = useSelector(({ account }) => account);
  const { isLogin } = useSelector(({ common }) => common);

  const ownPlaylist = playlist.filter((item) => item.subscribed === false);
  const subscribedPlaylist = playlist.filter((item) => item.subscribed === true);
  return (
    <div className="dommain_left overflow-auto max-h-full flex-none p-2.5">
      <nav className="options1 space-y-0.5">
        {
          options1.map((item) => (
            <NavLink
              key={item.name}
              className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
              activeClassName="bg-gray-100 font-bold text-base"
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))
        }
      </nav>
      <div className="dommain_left_dt">我的音乐</div>
      <nav className="space-y-0.5">
        <NavLink
          className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
          activeClassName="bg-gray-100"
          to="/local"
        >
          <IconFileMusic size={20} stroke={1} className="mr-1" />
          本地音乐
        </NavLink>
        <NavLink
          className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
          activeClassName="bg-gray-100"
          to="/download"
        >
          <IconCloudDownload size={20} stroke={1} className="mr-1" />
          下载管理
        </NavLink>
        {isLogin && (
          loginNav.map(([name, link, Ico]) => (
            <NavLink
              className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
              activeClassName="bg-gray-100"
              to={link}
              key={name}
            >
              <Ico size={20} stroke={1} className="mr-1" />
              {name}
            </NavLink>
          ))
        )}
      </nav>
      <DomPlaylist name="创建的歌单" playlist={ownPlaylist} />
      {
        isLogin && (
          <DomPlaylist name="收藏的歌单" playlist={subscribedPlaylist} />
        )
      }
    </div>

  );
};

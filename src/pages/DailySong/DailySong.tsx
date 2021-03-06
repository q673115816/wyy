import React, { memo, useEffect, useState } from 'react';
import {
  IconFolderPlus,
} from '@tabler/icons';
import classNames from 'classnames';
import dayjs from 'dayjs';
import {
  apiRecommendSongs,
} from '@/api';
import { SymbolToday } from '@/components/Symbol';
import useLoginStatus from '@/hooks/useLoginStatus';
import DomRank from '@/components/Table/Rank';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomGroupPlay from '@/components/GroupPlay';
import DomName from '@/components/Table/Name';
import DomArtist from '@/components/Table/Artists';
import DomAlbum from '@/components/Table/Album';
import DomMenuCreate from '@/components/MenuCreate';

export default memo(() => {
  useLoginStatus();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { data = [] } = await apiRecommendSongs();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="w-full overflow-auto max-h-full flex-auto">
      <div className="px-8 pb-2.5 pt-6 border-b">
        <div className="section flex items-center">
          <div className="date w-20 h-20 ui_themeColor">
            <SymbolToday />
          </div>
          <div className="content ml-8">
            <div className="h1">每日歌曲推荐</div>
            <div className="text-gray-400 tips">
              根据你的音乐口味生成, 每天6:00更新
            </div>
          </div>
        </div>
        <div className="actions flex mt-5">
          <DomGroupPlay playlist={data.dailySongs} />
          &nbsp;
          &nbsp;
          <button type="button" className="inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100">
            <IconFolderPlus size={22} stroke={1} />
            &nbsp;
            收藏全部
          </button>
        </div>
      </div>
      <div className="pb-8" style={{ '--ui_grid_template': '36px / 54px 30px 30px 36% 4fr 6fr 2fr' }}>
        <div className="list">
          <div className="thead">
            <div className="item grid leading-8 ui_grid_template">
              <div className="index" />
              <div className="heart" />
              <div className="download" />
              <div className="name text-gray-500 px-2">音乐标题</div>
              <div className="artist text-gray-500 px-2">歌手</div>
              <div className="album text-gray-500 px-2">专辑</div>
              <div className="duration text-gray-500 px-2">时长</div>
            </div>
          </div>
          <div className="tbody">
            {
              data.dailySongs?.map((item, index) => (
                <DomMenuCreate
                  schema={[
                    ['评论',
                      '播放',
                      '下一首播放'],
                    ['收藏到歌单',
                      '分享',
                      '复制链接',
                      '不感兴趣',
                      '下载'],
                  ]}
                  type="song"
                  item={item}
                  key={item.name + item.id}
                  tabIndex="2"
                  className={classNames('grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template', { 'bg-gray-50': index % 2 === 0 })}
                >
                  <>
                    <div className="index pr-3 text-right">
                      <DomRank index={index} id={item.id} />
                    </div>
                    <div className="heart">
                      <DomHeart id={item.id} />
                    </div>
                    <div className="download">
                      <DomDownload />
                    </div>
                    <DomName item={item} className="px-2" />
                    <DomArtist artists={item.ar} className="px-2" />
                    <DomAlbum className="px-2" name={item.al.name} id={item.al.id} />
                    <div className="duration text-gray-400 truncate px-2">
                      {dayjs(item.dt).format('mm:ss')}
                    </div>
                  </>
                </DomMenuCreate>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
});

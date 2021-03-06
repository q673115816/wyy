import React, { memo, useMemo } from 'react';
import { apiMVSublist } from '@/api';
import Search from '@/components/HeaderBarSearch';
import DomGridVideo from '@/components/GridVideo';
import useInit from './useInit';
import Empty from './components/Empty';

const NAME = '视频';

const filterRule = (data, search) => data
  .filter((item) => item.title.indexOf(search) >= 0
    || item.creator.find((creator) => creator.userName.indexOf(search) >= 0));

export default memo(() => {
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiMVSublist, filterRule);

  const memoFilter = useMemo(() => filter.map(({
    vid, coverUrl, playTime, durationms, title, type, creator,
  }) => ({
    id: vid,
    cover: coverUrl,
    playCount: playTime,
    duration: durationms,
    title,
    type,
    creator,
  })), [filter, search]);
  return (
    <>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的视频</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索我收藏的视频' }} />
        </div>
      </div>
      <div className="domSublist_grid">
        {(search && filter.length === 0)
          ? (
            <Empty>
              未能找到与“
              {search}
              ”相关的任何
              {NAME}
            </Empty>
          )
          : (
            <DomGridVideo
              list={memoFilter}
            />
          )}
      </div>
    </>
  );
});

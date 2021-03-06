import React, {
  memo, useEffect, useState,
} from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiCloudSearch, apiSearchMultimatch } from '@/api';
import { setSearchValue } from '@/reducers/search/actions';
import './style.scss';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import DomSongs from './Songs';
import DomArtists from './Artists';
import DomAlbums from './Albums';
import DomVideos from './Videos';
import DomPlaylists from './Playlists';
import DomLyrics from './Lyrics';
import DomDjRadios from './DjRadios';
import DomUserprofiles from './Userprofiles';

const switchs = {
  单曲: {
    code: 1,
    unit: '首',
    limit: 100,
    Dom: DomSongs,
    countName: 'songCount',
  },
  歌手: {
    code: 100,
    unit: '位',
    limit: 20,
    Dom: DomArtists,
    countName: 'artistCount',
  },
  专辑: {
    code: 10,
    unit: '张',
    limit: 20,
    Dom: DomAlbums,
    countName: 'albumCount',
  },
  视频: {
    code: 1014,
    unit: '个',
    limit: 24,
    Dom: DomVideos,
    countName: 'videoCount',
  },
  歌单: {
    code: 1000,
    unit: '个',
    limit: 20,
    Dom: DomPlaylists,
    countName: 'playlistCount',
  },
  歌词: {
    code: 1006,
    unit: '首',
    limit: 20,
    Dom: DomLyrics,
    countName: 'songCount',
  },
  主播电台: {
    code: 1009,
    unit: '个',
    limit: 100,
    Dom: DomDjRadios,
    countName: 'djRadiosCount',
  },
  用户: {
    code: 1002,
    unit: '位',
    limit: 20,
    Dom: DomUserprofiles,
    countName: 'userprofileCount',
  },
};

export default memo(({ keywords, type }) => {
  console.log('entry search');
  const dispatch = useDispatch();
  const [result, setResult] = useState({});
  const [count, setCount] = useState(0)
  const [multimatch, setMultimatch] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const {
    code,
    unit,
    limit,
    Dom,
    countName,
  } = switchs[type];


  const { searchValue } = useSelector(({ common }) => common);

  const handleInit = async () => {
    setLoading(true);
    try {
      const { result } = await apiCloudSearch({
        keywords,
        limit,
        type: code,
        offset: (page - 1) * limit,
      });
      const count = result[countName]
      if (type === '单曲') {
        const { result: multimatch = {} } = await apiSearchMultimatch({
          keywords,
        });
        setMultimatch(multimatch);
      }
      setCount(count)
      setResult(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!searchValue) {
      dispatch(setSearchValue({
        searchValue: keywords,
      }));
    }
  }, []);

  useEffect(() => {
    setPage(1);
  }, [keywords, type]);

  useEffect(() => {
    handleInit();
  }, [keywords, type, page]);

  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="domSearch_header p-8 pb-2.5 border-b">
        <div className="font-bold text-base">
          找到
          {count || 0}
          {unit}
        </div>
        <div className="domSearch_nav mt-5 space-x-4">
          {Object.keys(switchs).map((name) => (
            <NavLink
              key={name}
              activeClassName="font-bold"
              to={`/search/${keywords}/${name}`}
              className="domSearch_nav_link text-lighter text-sm"
            >
              {name}
            </NavLink>
          ))}
        </div>
        { }
      </div>
      <div className="domSearch_main">
        {
          loading
            ? <div className="pt-48 flex-center"><DomLoading /></div>
            : (
              <>
                <Dom {...{ multimatch, ...result }} />
                <DomPage total={Math.ceil(count / limit)} page={page} func={setPage} />
              </>
            )
        }
      </div>
    </div>
  );
});

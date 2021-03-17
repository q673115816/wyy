import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import './style.scss';
// import Lazyload from 'react-lazyload';
import {
  apiTopPlaylist,
  apiPlaylistCatlist,
  apiTopPlaylistHighquality,
  apiPlaylistHighqualityTags,
  apiPlaylistHot,
} from '@/api';
import { setTopPlaylist, setPlaylistCatlist } from '@/reducers/home/actions';
import DomLoading from '@/components/Loading';
import DomResize from '@/components/ResizeObserver';
import DomPage from '@/components/Page';
import DomBanner from './components/Banner';
import DomHeaderBar from './components/HeaderBar';
import DomItem from './components/Item';

export default () => {
  const [order, setOrder] = useState('hot');// new , default = hot
  // const [offer, setOffer] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const DomScroll = useRef();
  const { cat = '全部歌单', page = 1 } = useParams();

  const {
    highquality,
    playlists,
  } = useSelector(({ home: { playlist } }) => playlist);

  const handleProInit = async () => {
    try {
      const [hot, catlist] = await Promise.all([
        apiPlaylistHot(),
        apiPlaylistCatlist(),
      ]);
      dispatch(setPlaylistCatlist({
        hot, catlist,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    try {
      const highquality = await apiTopPlaylistHighquality({
        cat,
        limit: 1,
      });
      const playlists = await apiTopPlaylist({
        order,
        cat,
        limit: 100,
        offset: (page - 1) * 100,
      });
      dispatch(setTopPlaylist({
        highquality,
        playlists,
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      DomScroll.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleProInit();
  }, []);

  useEffect(() => {
    handleInit();
    // setPopup(false);
    // DomScroll.current.scrollTo(0, 0);
  }, [order, cat, page]);
  if (loading) {
    return (
      <div className="flex-center w-full h-full">
        <DomLoading />
      </div>
    );
  }
  return (
    <div className="domHome_playlist px-8 overflow-auto max-h-full flex-auto" ref={DomScroll}>
      <div className="ui_w1100">
        {highquality.playlists.length > 0 && <DomBanner item={highquality.playlists[0]} cat={cat} />}
        <DomHeaderBar />
        <DomResize className="domHome_playlist_list grid gap-5" small="grid-cols-4" big="grid-cols-5">
          {
            playlists.playlists.map((item) => (
              <DomItem item={item} />
            ))
          }
        </DomResize>
        <DomPage total={Math.ceil(playlists.total / 100)} page={page} />
      </div>
    </div>
  );
};

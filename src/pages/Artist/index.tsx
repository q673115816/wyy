import React, { memo, useState } from 'react';

import classNames from 'classnames';

import './style.scss';

import DomAlbum from './Album';
import DomMV from './MV';
import DomDetail from './Detail';
import DomSimilarity from './Similarity';
import DomHeader from './components/Header';

const nav = {
  专辑: DomAlbum,
  MV: DomMV,
  歌手详情: DomDetail,
  相似歌手: DomSimilarity,
};

export default memo(({ id }) => {
  // if (!/^\d*$/.test(id)) {
  //   return <Redirect to="/" />;
  // }
  const [tab, setTab] = useState('专辑');
  return (
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <DomHeader id={id} />
      <div className="domArtist_main">
        <div className="domArtist_nav flex mx-8">
          <div className="flex space-x-4 text-sm">
            {
              Object.keys(nav).map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  type="button"
                  className={classNames('domArtist_nav_link', tab === item && 'font-bold ui_underline')}
                >
                  {item}
                </button>
              ))
            }
          </div>
          <div className="domArtist_album_layout ml-auto" />
        </div>
        {/* <DomSimilarity id={id} /> */}
        {
          ((Dom, id) => <Dom id={id} />)(nav[tab], id)
        }

      </div>
    </div>
  );
});

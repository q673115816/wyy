import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import DomMenuCreate from '@/components/MenuCreate';
import {IconPlayerPlay} from '@tabler/icons'

export default memo(({ mv = [] }) => (
  <div className="domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4">
    {
      mv.slice(0, 3).map((item) => (
        <div className="item" key={item.id}>
          <DomMenuCreate
            type="mv"
            item={item}
            schema={[
              ['评论', '播放MV'],
              ['收藏MV', '分享', '下载', '复制链接'],
              ['不感兴趣'],
            ]}
          >
            <div className="cover border relative overflow-hidden rounded text-white">
                <div className="absolute top-0 w-full px-2 py-3 ui_linear_mask_top pointer-events-none">
                  {item.copywriter}
                </div>
                <div className="absolute top-1 right-2 pointer-events-none">
                  <div className="flex-center">
                    <IconPlayerPlay size={12}/>
                    {item.playCount}
                  </div>
                </div>
                <Lazyload scroll resize>
                  <Link to={`/player/mv/${item.id}`} className="block ui_aspect-ratio-16/9">
                    <img className="h-full object-cover w-full" src={item.picUrl} alt="" />
                  </Link>
                </Lazyload>
            </div>
          </DomMenuCreate>
          <div className="name truncate text-sm mt-2">
            <Link className="ui_text_black_hover" to={`/player/mv/${item.id}`}>
              {item.name}
            </Link>
          </div>
          <div className="artist truncate mt-1">
            {
              item.artists.map((artist, index) => (
                <span key={artist.id} className="text-gray-400">
                  {index > 0 && ' / '}
                  <Link
                    to="/artist/:id"
                    className="ui_text_gray_hover"
                  >
                    {artist.name}
                  </Link>
                </span>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
));

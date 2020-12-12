import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Lazyload from 'react-lazyload';
import './style.scss';
import DOMtingting from '@/components/AdLookSquare';

import DomSwiper from '@/components/DomSwiper';

// import Swiper core and required components
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';

import handleInit from './init';

// install Swiper components
SwiperCore.use([
  Navigation,
  A11y]);

const DomDjNormal = ({ item = {} }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to="/">
          <Lazyload overflow>
            <img className="containimg" src={item.picUrl} alt="" />
          </Lazyload>
          <div className="lb">
            <div className="whitetext">{item.name}</div>
          </div>
        </Link>
      </div>
    </div>
    <div className="footer">
      <Link to="/">{item.rcmdtext}</Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const {
    DjBanner,
    category,
    DjPersonalizeRecommend,
    创作翻唱,
    声之剧场,
    音乐故事,
    情感调频,
    声音恋人,
  } = useSelector(({ home }) => home.dj);
  const restlist = [
    ['创作翻唱', 创作翻唱],
    ['声之剧场', 声之剧场],
    ['音乐故事', 音乐故事],
    ['情感调频', 情感调频],
    ['声音恋人', 声音恋人]];

  useEffect(() => {
    handleInit({ dispatch });
  }, []);

  // const random = (height) => Math.random() * height >> 0;
  // const randomrgb = () => `rgb(${random(255)},${random(255)},${random(255)})`;
  return (
    <div className="domHome_dj">
      <div className="domHome_dj_banner">
        {
          DjBanner.length > 0 && (
            <DomSwiper list={DjBanner} coverSrc="pic" />
          )
        }
      </div>
      <div className="domHome_item">
        {category.length > 0
          && (
            <div className="domHome_dj_nav">
              <Swiper
                navigation
                spaceBetween={40}
                slidesPerView="7"
                slidesPerGroup="8"
              >
                <SwiperSlide className="item">
                  <Link to="/">
                    <div className="inner">
                      <div className="btn">
                        <i className="ico" />
                      </div>
                      <div className="name">
                        排行榜
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                {
                  category.map((item) => (
                    <SwiperSlide className="item" key={item.categoryId}>
                      <Link to="/">
                        <div className="inner">
                          <div className="btn">
                            <i className="ico" />
                          </div>
                          <div className="name gary">{item.categoryName}</div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          )}
      </div>
      <div className="domHome_item">
        <Link className="domHome_linktitle" to="/">听听 &gt;</Link>
        <div className="domHome_dj_tingting ui_grid square">
          {
            Object.keys(Array(5).fill(0))
              .map((item) => <DOMtingting key={item} />)
          }
        </div>
      </div>
      <div className="domHome_item">
        <div className="domHome_linktitle">电台个性推荐</div>
        <div className="domHome_dj_tingting ui_grid square row_1">
          {
            DjPersonalizeRecommend
              .map((item) => (
                <DomDjNormal item={item} key={item.id} />
              ))
          }
        </div>
      </div>
      {
        restlist.map((subitem) => (
          <div key={subitem[0]} className="domHome_item">
            <Link className="domHome_linktitle" to="/">
              {subitem[0]}

              &gt;
            </Link>
            <div className="domHome_dj_tingting ui_grid square row_1">
              {
                subitem[1]
                  .map((item) => (
                    <DomDjNormal item={item} key={item.id} />
                  ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};
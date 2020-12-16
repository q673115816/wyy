import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { apiHotTopic, apiEvent, apiCommentEvent } from '@/api';
import { setFriendInit, setFriendEvent, setCommentEvent } from '@/redux/actions';
import { useRouteMatch } from 'react-router';
import './style.scss';

import ActItem from './ActItem';

// dayjs.extend(relativeTime);

const getArticleFromJson = (json) => {
  const obj = JSON.parse(json);
  return (
    <>
      <div className="song">
        <div className="cover">
          <img src={obj.img80x80} alt="" />
        </div>
        <div className="">
          {obj.song.name}
        </div>
      </div>
    </>
  );
};

export default () => {
  const {
    hot, isLogin, event,
  } = useSelector(({ friend, common }) => ({ ...friend, ...common }));
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const [actThreadId, setActThreadId] = useState('');
  const handleInit = async () => {
    try {
      const { hot } = await apiHotTopic({
        limit: 5,
      });
      if (isLogin) {
        const { event } = await apiEvent();
        dispatch(setFriendEvent({ event }));
      }
      dispatch(setFriendInit({
        hot,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetComment = async (threadId) => {
    if (actThreadId === threadId) {
      setActThreadId('');
      return;
    }
    try {
      const { comments } = await apiCommentEvent({
        threadId,
      });
      setActThreadId(threadId);
      dispatch(setCommentEvent({ comments }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domFriend overflow-auto">
      <div className="domFriend_left">
        <div className="domFriend_header">
          <span className="h1">动态</span>
          <button type="button" className="ui_btn_small">
            <i className="material-icons">add</i>
            写动态
          </button>
        </div>
        <div className="domFriend_content">
          {
            isLogin ? (
              <div className="domFriend_dynamic">
                {event.map((item) => (
                  <ActItem
                    actThreadId={actThreadId}
                    key={item.id}
                    item={item}
                    handleGetComment={handleGetComment}
                  />
                ))}
              </div>
            )

              : (
                <div className="empty insetCenter center">
                  <span className="gray">
                    暂无动态
                  </span>
                </div>
              )
          }
        </div>
      </div>
      <div className="domFriend_split" />
      <div className="domFriend_right">
        <div className="domFriend_user">
          <div className="nologin">
            <div style={{ height: 170 }} />
            <div className="tips">
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </div>
            <button type="button" className="login">立即登录</button>
          </div>
        </div>
        <div className="domFriend_hotTopic">
          <div className="header">
            <span>热门话题</span>
            <Link className="gray" to={`${url}/hotTopic`}>更多 &gt;</Link>
          </div>
          <div className="list">
            {hot.map((item) => (
              <Link to="/" key={item.actId} className="item">
                <div className="cover">
                  <img className="ui_containimg" src={`${item.sharePicUrl}?param=50y50`} alt="" />
                </div>
                <div className="content">
                  <div className="title">
                    #
                    {item.title}
                    #
                  </div>
                  <div className="participateCount">
                    <span className="gray">
                      {item.participateCount}
                      人参与
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

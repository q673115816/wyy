import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiCommentLike } from '@/api';
import { IconThumbUp, IconScreenShare, IconMessageCircle } from '@tabler/icons';
import { transTextEmoji } from '@/common/faces';

const types = {
  歌曲: 0,
  MV: 1,
  歌单: 2,
  专辑: 3,
  电台: 4,
  视频: 5,
  动态: 6,

};

export default memo(({
  item = {}, handleLike = () => null, type = '0', threadId,
}) => {
  const handleClick = async () => {
    try {
      const { } = await apiCommentLike({
        id,
        cid,
        t,
        type: types[type],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ui_comment flex py-4 group">
      <Link to={`/user/${item.user.userId}`} className="ui_comment_avatar w-10 h-10 flex-none relative">
        <img className="border rounded-full w-full h-full" src={`${item.user.avatarUrl}?param=40y40`} alt="" />
        {
          item.user?.avatarDetail?.identityIconUrl
          && (
            <img
              className="absolute right-0 bottom-0 w-3 h-3"
              src={item.user.avatarDetail.identityIconUrl}
              alt=""
            />
          )
        }
      </Link>
      <div className="ui_comment_content pl-4 flex-auto">
        <div className="ui_comment_comment">
          <Link className="ui_link" to={`/user/${item.user.userId}`}>
            {item.user.nickname}
            ：
          </Link>
          <span className="ui_comment_text select-text text-gray-500">
            {transTextEmoji(item.content)}
          </span>
        </div>
        {
          item.beReplied.map((beReplied) => (
            <div
              className="ui_comment_beReplied p-2 bg-gray-100 mt-2"
              key={beReplied.beRepliedCommentId}
            >
              {
                beReplied.content
                  ? (
                    <>
                      <Link
                        className="ui_link"
                        to={`/user/${beReplied.user.userId}`}
                      >
                        {beReplied.user.nickname}
                        ：
                      </Link>
                      <span className="ui_comment_text select-text text-gray-500">
                        {transTextEmoji(beReplied.content)}
                      </span>
                    </>
                  )
                  : <div className="text-center select-text text-gray-500">该评论已删除</div>
              }
            </div>
          ))
        }
        <div className="ui_comment_info mt-2.5 flex">
          <span className="ui_comment_time text-gray-400">
            {dayjs(item.time).format('YYYY年MM月DD日 HH:mm')}
          </span>
          <div className="ui_comment_actions ml-auto flex items-center">
            <div className="px-3 border-r opacity-0 group-hover:opacity-100 ">
              <button type="button" className="ui_text_black_hover">
                举报
              </button>
            </div>
            <div className="px-3 border-r">
              <button
                type="button"
                className="flex-center ui_text_black_hover"
                onClick={() => handleLike(item.commentId, item.liked)}
              >
                {item.liked
                  ? <IconThumbUp size={16} stroke={0} fill="var(--themeColor)" />
                  : <IconThumbUp size={16} stroke={1} />}
                {item.likedCount}
              </button>
            </div>
            <div className="px-3 border-r">
              <button type="button" className="flex-center ui_text_black_hover">
                <IconScreenShare size={16} stroke={1} />
              </button>
            </div>
            <div className="pl-4">
              <button type="button" className="flex-center ui_text_black_hover">
                <IconMessageCircle size={16} stroke={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

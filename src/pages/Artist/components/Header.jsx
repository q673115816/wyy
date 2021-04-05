import React, { useEffect, useState } from 'react';
import {
  IconFolderPlus,
  IconCheckbox,
} from '@tabler/icons';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDialogUnSubscriptionShow, setToast } from '@/reducers/mask/actions';

import {
  apiArtistDetail, apiArtistSub,
} from '@/api';

export default () => {
  const { id } = useParams();

  const { artistSublist } = useSelector(({ account }) => account);

  const dispatch = useDispatch();
  const [detail, setDetail] = useState({});
  const handleInit = async () => {
    try {
      const { data: detail } = await apiArtistDetail({
        id,
      });
      setDetail(detail);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnSubscription = () => {
    dispatch(setDialogUnSubscriptionShow({
      artistId: id,
    }));
  };

  const handleSubscription = async () => {
    try {
      const { code } = apiArtistSub({
        id,
        t: 1,
      });
      if (code === 200) {
        dispatch(setToast('收藏成功！'));
        // setDetail({
        //   ...detail,
        //   blacklist: !detail.blacklist,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [id]);
  return (
    <div className="domArtist_header flex p-8">
      <div className="avatar border overflow-hidden rounded">
        <img src={`${detail.artist?.cover}?param=200y200`} alt="" />
      </div>
      <div className="content flex-auto px-5">
        <div className="name h1 select-text">{detail.artist?.name}</div>
        <div className="enname my-3 select-text">{detail.alias?.map((alia) => alia)}</div>
        <div className="actions mt-3 flex space-x-2">
          {artistSublist.find((item) => item.id === Number(id))
            ? (
              <button
                onClick={handleUnSubscription}
                type="button"
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"
              >
                <IconCheckbox size={20} stroke={1} />
                已收藏
              </button>
            )
            : (
              <button
                onClick={handleSubscription}
                type="button"
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"
              >
                <IconFolderPlus size={20} stroke={1} />
                收藏
              </button>
            )}
          {
          detail.user
          && (
            <Link
              to={`/user/${detail.user?.userId}`}
              className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"
            >
              个人主页
            </Link>
          )
        }
        </div>
        <div className="info mt-5 space-x-5">
          <span className="size">
            单曲数:
            {detail.artist?.musicSize}
          </span>
          <span className="size">
            专辑数:
            {detail.artist?.albumSize}
          </span>
          <span className="size">
            MV数:
            {detail.artist?.mvSize}
          </span>
        </div>
      </div>
    </div>
  );
};

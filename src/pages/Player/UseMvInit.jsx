import React, { useState } from 'react';
import {
  apiRelatedAllvideo,
  apiMvUrl,
  apiMvDetail,
  apiMvDetailInfo,
  apiCommentMv,
} from '@/api';

export default () => {
  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [related, setRelated] = useState([]);
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});
  const [comments, setComments] = useState({});

  const handleInit = async (id) => {
    try {
      const [
        { data: urls },
        { data: related = [] },
        { data: detail = {} },
        detailInfo = {},
        comments = {},
      ] = await Promise.all([
        apiMvUrl({
          id,
        }),
        apiRelatedAllvideo({
          id,
        }),
        apiMvDetail({
          mvid: id,
        }),
        apiMvDetailInfo({
          mvid: id,
        }),
        apiCommentMv({
          id,
        }),
      ]);
      detail.title = detail.name;
      detail.description = detail.desc;
      setPending(true);
      setUrls(urls);
      setRelated(related);
      setDetail(detail);
      setDetailInfo(detailInfo);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    pending,
    urls,
    related,
    detail,
    detailInfo,
    comments,
    handleInit,
  };
};

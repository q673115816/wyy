import React from 'react';
import {
  NavLink, Switch, Redirect, Route,
} from 'react-router-dom';
import './style.scss';

import DomSong from './Song';
import DomAlbum from './Album';

export default () => (
  <div className="domHome_content overflow-auto max-h-full flex-auto">
    <div className="domHome_newest">
      <div className="domHome_newest_nav">
        <NavLink className="domHome_newest_nav_link" activeClassName="on" to="/home/newest/song">新歌速递</NavLink>
        <NavLink className="domHome_newest_nav_link" activeClassName="on" to="/home/newest/album">新碟上架</NavLink>
      </div>
      <Switch>
        <Route path="/home/newest/song" component={DomSong} />
        <Route path="/home/newest/album" component={DomAlbum} />
        <Redirect to="/home/newest/song" />
      </Switch>
    </div>
  </div>
);

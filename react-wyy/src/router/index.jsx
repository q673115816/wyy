import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const Setting = loadable(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const Video = loadable(() => import(/* webpackChunkName: "Video" */'@/pages/Video'));
const Local = loadable(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Look = loadable(() => import(/* webpackChunkName: "Look" */'@/pages/Look'));
const Download = loadable(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));
const Friend = loadable(() => import(/* webpackChunkName: "Friend" */'@/pages/Friend'));
const Love = loadable(() => import(/* webpackChunkName: "Love" */'@/pages/Love'));

const ToplistArtist = loadable(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const Playlist = loadable(() => import(/* webpackChunkName: "Playlist" */'@/pages/Playlist'));
const User = loadable(() => import(/* webpackChunkName: "User" */'@/pages/User'));

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/video" component={Video} />
    <Route path="/Look" component={Look} />
    <Route path="/local" component={Local} />
    <Route path="/download" component={Download} />
    <Route path="/friend" component={Friend} />
    <Route path="/love" component={Love} />
    <Route path="/toplistartist/:type">
      <ToplistArtist />
    </Route>
    <Route path="/playlist/:id" component={Playlist} />
    <Route path="/user" component={User} />
    <Route path="/settings" component={Setting} />
    <Redirect to="/home" />
  </Switch>
);

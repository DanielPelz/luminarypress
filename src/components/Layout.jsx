import React from 'react';
import ThemeList from './ThemeList';
import PluginsList from './PluginsList';
import ShortcodesList from './ShortcodesList';
import PageContent from './PageContent';
import WidgetsList from './WidgetsList';

const Layout = () => {
  return (
    <div className="visual-builder-layout">
      <ThemeList />
      <PluginsList />
      <WidgetsList />
      <ShortcodesList />
      <PageContent />
    </div>
  );
};

export default Layout;

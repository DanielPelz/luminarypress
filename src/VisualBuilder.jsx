import React from "react";
import ThemesList from "./components/ThemeList";
import PluginsList from "./components/PluginsList";
import WidgetsList from "./components/WidgetsList";
import ShortcodesList from "./components/ShortcodesList";
import PageContent from "./components/PageContent";
import ContentEditor from "./components/ContentEditor";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/canvas";

const VisualBuilder = ({ postId }) => {
   

  // Handle save callback for the ContentEditor
  const handleSave = (rawContent, htmlContent) => {
    console.log("Raw content:", rawContent);
    console.log("HTML content:", htmlContent);

    // You can send the content to your backend to save it in the database.
  };


  return (
    <div className="visual-builder">
          <ThemesList />
          <PluginsList />
          <WidgetsList />
          <ShortcodesList />
          <PageContent postId={postId} />
          <ContentEditor onSave={handleSave} />
          <Sidebar />
          <Toolbar />
          <Canvas />
    
    </div>
  );
};

export default VisualBuilder;

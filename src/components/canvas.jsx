import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { moveComponent } from "../actions/visualBuilderActions";
import ComponentWrapper  from "./ComponentWrapper";

const Canvas = () => {
  const pageContent = useSelector((state) => state.pageContent.content);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: ["TEMPLATE", "WIDGET", "SHORTCODE"],
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      dispatch(moveComponent(item.id, left, top));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const canvasStyle = {
    width: "100%",
    height: "100%",
    border: isOver ? "2px dashed gray" : "2px solid gray",
  };

  return (
    <div className="canvas" ref={drop} style={canvasStyle}>
      {pageContent.map((component, index) => (
        <ComponentWrapper key={index} component={component} />
      ))}
    </div>
  );
};

export default Canvas;

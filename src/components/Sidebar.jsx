import React, { memo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { search } from "../actions/visualBuilderActions";

const debouncedSearch = _.debounce((searchTerm, dispatch) => {
  dispatch(search(searchTerm));
}, 500);

const DraggableItem = memo(({ item }) => {
  if (!item.id_base) {
    console.error("Item type is not defined:", item);
    return null;
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.id_base,
    item: { id: item.id_base },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {item.name}
    </div>
  );
});


const Sidebar = () => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes.themes);
  const plugins = useSelector((state) => state.plugins.plugins);
  const widgets = useSelector((state) => state.widgets.widgets);
  const shortcodes = useSelector((state) => state.shortcodes.shortcodes);

  const itemList = [...themes, ...plugins, ...widgets, ...shortcodes];

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value, dispatch);
  };

  const items = React.useMemo(
    () =>
      itemList
        .filter(
          (item) =>
            item.id_base &&
            typeof item.name === "string" &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => <DraggableItem key={item.id_base} item={item} />),
    [itemList, searchTerm]
  );
  

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {items}
    </div>
  );
};

export default Sidebar;

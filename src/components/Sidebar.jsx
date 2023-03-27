import React, { memo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, connect } from "react-redux";
import _ from "lodash";
import { search } from "../actions/visualBuilderActions";

const debouncedSearch = _.debounce((searchTerm, dispatch) => {
  dispatch(search(searchTerm));
}, 500);

const mapStateToProps = (state) => ({
  themes: state.themes.themes,
  plugins: state.plugins.plugins,
  widgets: state.widgets.widgets,
  shortcodes: state.shortcodes.shortcodes,
});

const DraggableItem = memo(({ item }) => {
  if (!item.type) {
    console.error("Item type is not defined:", item);
    return null;
  }

  const [{ isDragging }, drag] = useDrag({
    item: { type: item.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

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

const Sidebar = ({ themes, plugins, widgets, shortcodes }) => {
  const dispatch = useDispatch();

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
            typeof item.name === 'string' &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => <DraggableItem key={item.id} item={item} />),
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

export default connect(mapStateToProps)(Sidebar);

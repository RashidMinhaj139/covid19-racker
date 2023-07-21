import Item from "./item/item";

function List() {
  let arr = ["item 1", "item 2"];
  let items = arr.map((item, index) => {//map
    return <Item key={"no:" + index}  title={item} />;
  });
  return <div>{items}</div>;
}
export default List;

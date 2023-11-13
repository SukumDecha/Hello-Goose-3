export type ItemType = {
  name: string;
  isPacked: boolean;
};

const items: ItemType[] = [
    { isPacked: true, name: "Space suit" },
    { isPacked: true, name: "Helmet with a golden leaf" },
    { isPacked: false, name: "Photo of Tam" },
    { isPacked: false, name: 'A copy of the book "The Right Stuff"' },
    { isPacked: false, name: "Harry Potter Collection" },
  ];

const PackingList = () => {
    const itemList = items.map((item) => (
        <Item key={item.name} isPacked={item.isPacked} name={item.name} />
      ));
  return (
    <section className="p-5">
      <h1 className="text-xl">Sally Ride's Packing List</h1>
      <ul>{itemList}</ul>
    </section>
  );
};

function Item({ name, isPacked }: ItemType) {
  return isPacked && <li>{name}</li>;
}

export default PackingList;
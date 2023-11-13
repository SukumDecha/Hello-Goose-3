export type ItemType = {
  name: string;
  isPacked: boolean;
};

const PackingList = () => {
  return (
    <section className="p-5">
      <h1>Sally's Backpack</h1>
      <ul>
        {/* Your Code Here */}
      </ul>
    </section>
  );
};

function Item({ name, isPacked }: ItemType) {
  return <li className="list-disc list-inside">item</li>;
}

export default PackingList;

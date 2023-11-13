export type ItemType = {
    name: string;
    isPacked: boolean;
};

const PackingList = () => {
  return (
    <section className="p-5">
        <h1>Sally's Backpack</h1>
        <ul>
            {/* Write your code here */}
        </ul>
    </section>
  )
}

function Item() {
    return (
        <li>item</li>
    )
}

export default PackingList
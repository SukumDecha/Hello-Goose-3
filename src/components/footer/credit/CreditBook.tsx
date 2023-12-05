

interface CreditBookProps {
  book: string;
}
export const CreditBook = ({ book }: CreditBookProps) => {
  return <span className="font-margarine text-white text-xl">{book}</span>;
};

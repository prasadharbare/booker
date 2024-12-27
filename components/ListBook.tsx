import SingleBook from "@/components/SingleBook";

interface ListBookProps {
  books: Book[];
  dispatch: React.Dispatch<Action>;
}

const ListBook = ({ books, dispatch }: ListBookProps) => {
  console.log(books);
  return (
    <div className="flex gap-2 container mx-auto flex-wrap items-center justify-center mb-10">
      {books.map((book) => (
        <SingleBook key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ListBook;
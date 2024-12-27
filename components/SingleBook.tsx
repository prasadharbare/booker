import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeMinus, ThumbsDown, ThumbsUp } from "lucide-react";

interface SingleBookProps {
  book: Book;
  dispatch: React.Dispatch<Action>;
}

const SingleBook = ({ book, dispatch }: SingleBookProps) => {
  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className="text-2xl">{book.author}</CardTitle>
        <CardDescription>Appreciation: {book.rating}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "like", payload: { id: book.id } })}
        >
          <ThumbsUp />
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "unlike", payload: { id: book.id } })}
        >
          <ThumbsDown />
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch({ type: "delete", payload: { id: book.id } })}
        >
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleBook;
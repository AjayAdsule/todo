import { useParams } from "react-router-dom";

export default function usePages() {
  const { category, day } = useParams();

  const categoryPage = ["work", "workout", "learning", "reading"];
  const mainPage = ["next-sevenday", "tomorrow", "today"];

  const isCategoryPage = categoryPage.includes(category as string);
  const isMainPage = mainPage.includes(day as string);

  return { isCategoryPage, isMainPage, category, day };
}

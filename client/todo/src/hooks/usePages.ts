import { useParams } from "react-router-dom";

const categoryPage = ["work", "workout", "learning", "reading"];
const mainPage = ["next-sevenday", "tomorrow", "today"];

export default function usePages() {
  const { category: listPageRoute, day: mainPagesRoute } = useParams();

  const isListPage = categoryPage.includes(listPageRoute as string);
  const isMainPage = mainPage.includes(mainPagesRoute as string);

  return { isListPage, isMainPage, listPageRoute, mainPagesRoute };
}

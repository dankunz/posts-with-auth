import { Flex } from "@chakra-ui/react";
import PaginationItem from "./controls/PaginationItem";

type PaginationProps = {
  currentPage: number;
  recordCount: number;
  limit: number;
  onPageChange: (_: number) => void;
};
export default function Pagination({
  currentPage,
  onPageChange,
  recordCount,
  limit,
}: PaginationProps) {
  const pages = [...Array(Math.round(recordCount / limit)).keys()];
  return (
    <Flex color={"white"}>
      {pages.map((p: number) => (
        <PaginationItem
          key={p}
          onPageChange={onPageChange}
          pageNumber={p + 1}
          active={p === currentPage}
        />
      ))}
    </Flex>
  );
}

import { Flex } from "@chakra-ui/react";

type PaginationItemType = {
  onPageChange: (n: number) => void;
  pageNumber: number;
  active: boolean;
};

export default function PaginationItem({
  onPageChange,
  pageNumber,
  active,
}: PaginationItemType) {
  function handleClick() {
    onPageChange(pageNumber - 1);
    window.scrollTo(0, 0);
  }
  return (
    <Flex
      onClick={handleClick}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
      borderRadius={5}
      width={10}
      height={10}
      bg={`${active ? "pink.300" : "cyan.600"}`}
      margin={3}
    >
      {pageNumber}
    </Flex>
  );
}

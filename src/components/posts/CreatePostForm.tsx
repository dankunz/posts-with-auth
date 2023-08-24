import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";

type FormValues = {
  title: string;
  content: string;
};

export default function CreatePostForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { api } = useAxios();
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    await api
      .post("/posts", { ...values })
      .then(() => {
        toast.success("Post created");
        reset();
      })
      .catch(() => toast.error("Cannot create a post"));
  };
  return (
    <Center>
      <Box as={"form"} width={500} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.title}>
          <FormLabel>Title:</FormLabel>
          <Input
            id="title"
            {...register("title", {
              required: "This is required",
              minLength: { value: 3, message: "Minimum length should be 3" },
            })}
          />
          <FormErrorMessage>
            <>{errors.title && errors.title.message}</>
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.content}>
          <FormLabel>Content:</FormLabel>
          <Input
            id="content"
            {...register("content", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            <>{errors.content && errors.content.message}</>
          </FormErrorMessage>
        </FormControl>
        <Stack mt={"1rem"}>
          <Button colorScheme="teal" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

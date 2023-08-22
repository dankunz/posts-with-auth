import axios from "axios";

const baseURL = "https://frontend-test-be.stage.thinkeasy.cz/";

export default axios.create({
  baseURL,

  headers: {
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGxna2V4NmIwMDBqbWk0dXVhdDI4N2htIiwiaWF0IjoxNjkyNjkzMzA4LCJleHAiOjE2OTI2OTQyMDh9.kKrD6BP2m4z_f2zY1axgF44mFl2v-oxKcMAnOdFyGhU"}`,
  },
});

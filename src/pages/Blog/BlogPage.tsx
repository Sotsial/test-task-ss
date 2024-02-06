import { Grid } from "@mui/material";
import { toast } from "react-toastify";
import jsonServerConfig from "../../shared/Api/jsonServerConfig";
import useAxios from "../../shared/hooks/useAxios";
import BlogCreate, { BlogVM } from "../../widgets/Blogs/BlogCreate";
import BlogList from "../../widgets/Blogs/BlogList";

const BlogPage = () => {
  const { data, isLoading, refetch } = useAxios<BlogVM[]>(
    jsonServerConfig,
    "/posts"
  );

  const createBlog = async (formData: BlogVM) => {
    await jsonServerConfig.post("/posts", formData);
    toast("Блог создан");
    refetch();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <BlogList data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={4}>
        <BlogCreate action={createBlog} />
      </Grid>
    </Grid>
  );
};

export default BlogPage;

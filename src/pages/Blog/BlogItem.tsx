import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import jsonServerConfig from "../../shared/Api/jsonServerConfig";
import useAxios from "../../shared/hooks/useAxios";
import { BlogVM } from "../../widgets/Blogs/BlogCreate";

const BlogItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useAxios<BlogVM>(
    jsonServerConfig,
    "/posts/" + id
  );

  useEffect(() => {
    if (!data) return;
    setFormData({
      title: data.title,
      description: data.description,
    });
  }, [data]);

  const [formData, setFormData] = useState<BlogVM>({
    title: "",
    description: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await jsonServerConfig.put("/posts/" + id, formData);
    toast("Блог отредактирован");
    navigate("/blogs");
  };
  const handleDelete = async () => {
    await jsonServerConfig.delete("/posts/" + id);
    toast("Блог удален");
    navigate("/blogs");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  if (isLoading)
    return (
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width={"100%"} height={100} />
          <Skeleton variant="rectangular" width={"100%"} height={150} />
        </Stack>
      </Container>
    );

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Запись</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Заголовок"
          fullWidth
          margin="normal"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Описание"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button type="submit" variant="contained" color="primary">
            Редактировать
          </Button>
          <Button onClick={handleDelete} variant="outlined" color="error">
            <DeleteIcon />
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default BlogItem;

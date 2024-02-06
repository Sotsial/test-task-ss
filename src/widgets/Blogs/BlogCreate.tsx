import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export interface BlogVM {
  id?: string;
  title: string;
  description: string;
}

const BlogCreate = ({ action }: { action: (formData: BlogVM) => void }) => {
  const [formData, setFormData] = useState<BlogVM>({
    title: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action(formData);
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Создание записи</Typography>
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

        <Button type="submit" variant="contained" color="primary">
          Создать запись
        </Button>
      </Box>
    </Container>
  );
};

export default BlogCreate;

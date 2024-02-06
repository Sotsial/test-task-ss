import { Grid, Skeleton } from "@mui/material";
import fakeApiInstance from "../../shared/Api/fakeApiConfig";
import useAxios from "../../shared/hooks/useAxios";
import CategoryCard from "../../widgets/FakeApi/CategoryCard";

export interface CategoryVm {
  id: string;
  name: string;
  image: string;
}

const FakeApiPage = () => {
  const { data, isLoading } = useAxios<CategoryVm[]>(
    fakeApiInstance,
    "/categories"
  );

  return (
    <Grid container spacing={4}>
      {!isLoading
        ? data?.map((el) => (
            <Grid item xs={4} key={el.id}>
              <CategoryCard card={el} />
            </Grid>
          ))
        : [...Array(5)].map((el) => (
            <Grid item xs={4} key={el}>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default FakeApiPage;

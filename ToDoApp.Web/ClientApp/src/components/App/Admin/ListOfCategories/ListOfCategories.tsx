import { Grid, Chip, LinearProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { MetadataService } from "../../../../services/metadata/metadataService";
import { ICategory } from "../../../../types/ICategory";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import CardHeader from "../../Common/CardTitle/CardTitle";
import styles from "./styles.module.scss";

interface IProps {
  history: any;
}

const ListOfCategories: React.FC<IProps> = (props: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [editingId, setEditingId] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    var response = await MetadataService.GetAllCategories();
    setCategories(response);
  }

  const SaveNewcategory = async () => {
    await MetadataService.AddNewCategory(newCategory);
    setNewCategory("");
    await getCategories();
  };

  const saveValue = async () => {
    await MetadataService.SaveCategory(editingId, {
      id: editingId,
      categoryName: value,
    });
    setEditingId(0);
    setValue("");
    await getCategories();
  };

  const cancelEditing = () => {
    setNewCategory("");
    setEditingId(0);
  };

  const deleteCategory = async (categoryId: number) => {
    await MetadataService.DeleteCategory(categoryId);
    await getCategories();
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <CardHeader
          title="Pregled kategorija"
          subtitle="Pregled kategorija u sustavu"
        />
        <div className={styles.form}>
          <Grid
            container
            item
            xs={12}
            className={styles.formContainer}
            justify="flex-start"
          >
            <Grid
              container
              item
              xs={12}
              className={styles.maincontainer}
              justify="flex-start"
            >
              <div className={styles.titleCat}>Dodaj novu kategoriju</div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className={styles.maincontainer}
              justify="flex-start"
            >
              <Grid
                container
                item
                xs={4}
                className={styles.noMarginContainer}
                justify="flex-start"
              >
                <input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Ime nove kategorije"
                />
              </Grid>
              <Grid
                container
                item
                xs={4}
                className={styles.noMarginContainer}
                justify="flex-start"
              >
                <div
                  className={styles.smallIconCont}
                  onClick={() => SaveNewcategory()}
                >
                  <SaveIcon />
                </div>
                <div
                  className={styles.smallIconCont}
                  onClick={() => cancelEditing()}
                >
                  <CancelIcon />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className={styles.maincontainer}
              justify="flex-start"
            >
              <div className={styles.titleCat}>Pregled svih kategorija</div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className={styles.maincontainer}
              justify="flex-start"
            >
              {categories.length > 0 ? (
                <>
                  {categories.map((category, i) => (
                    <>
                      <Grid item container xs={3}>
                        <div className={styles.chipCont}>
                          {editingId > 0 && editingId == category.id ? (
                            <div className={styles.marginCont}>
                              <input
                                defaultValue={category.categoryName}
                                onChange={(e) => setValue(e.target.value)}
                              ></input>
                            </div>
                          ) : (
                            <Chip
                              label={category.categoryName}
                              clickable
                              color="primary"
                            />
                          )}
                        </div>
                      </Grid>
                      <Grid item container xs={2}>
                        {!(editingId > 0 && editingId == category.id) ? (
                          <div
                            className={styles.smallIconCont}
                            onClick={() => setEditingId(category.id)}
                          >
                            <EditIcon />
                          </div>
                        ) : (
                          <div
                            className={styles.smallIconCont}
                            onClick={() => saveValue()}
                          >
                            <SaveIcon />
                          </div>
                        )}
                        {!(editingId > 0 && editingId == category.id) ? (
                          <div
                            className={styles.smallIconCont}
                            onClick={() => deleteCategory(category.id)}
                          >
                            <DeleteIcon />
                          </div>
                        ) : (
                          <div
                            className={styles.smallIconCont}
                            onClick={() => cancelEditing()}
                          >
                            <CancelIcon />
                          </div>
                        )}
                      </Grid>
                    </>
                  ))}
                </>
              ) : (
                <div className={styles.progressCont}>
                  <LinearProgress />
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ListOfCategories;

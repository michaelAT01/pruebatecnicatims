import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSeries } from '../features/seriesSlice';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ModalInformation from '../components/ModalInformation';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Container, Grid, Card, CardContent, Typography, CircularProgress, TextField, Select, MenuItem, FormControl, IconButton } from '@mui/material';

const Series = () => {
  const dispatch = useDispatch();
  const { series, status, error } = useSelector(state => state.series);
  const [yearFilter, setYearFilter] = useState('');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [dataItem, setDataItem] = useState({
  });

  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <div>Error al cargar la información: {error}</div>;
  }
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };
  const filteredSeries = series.filter(item => item.releaseYear.toString().includes(yearFilter));
  const callModal = (dataItem) => {

    setDataItem({
      "title": dataItem.title,
      "description": dataItem.description,
      "releaseYear": dataItem.releaseYear,
      "url": dataItem.images["Poster Art"].url
    });
    setOpen(true);
  }
  return (
    <Container className='mt-2'>
      <h2 className='text-md font-bold'>Series</h2>
      <TextField label="Filtro por año" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} fullWidth margin="normal" />
      <FormControl fullWidth>
        <Select value={resultsPerPage} onChange={(e) => setResultsPerPage(e.target.value)} displayEmpty>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {filteredSeries.slice((page - 1) * resultsPerPage, page * resultsPerPage).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent className="flex flex-col">
                <img src={item.images["Poster Art"].url} alt={item.title} style={{ width: '100%' }} className='rounded' />
                <div className='flex flex-row gap-x-2 items-center content-center mt-1'>
                  <Typography variant="h6" component="div"  >
                    {item.title}
                  </Typography>
                  <IconButton aria-label="plus" disabled={open} color="primary" onClick={() => callModal(item)}>
                    <MoreVertIcon style={{ fontSize: 17 }} />
                  </IconButton>
                </div>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
      {open && <ModalInformation data={dataItem} openModalActivate={open} setOpenModalActivate={setOpen} />}
      <div className="flex justify-between mt-4">
        <button className='text-black-300 hover:underline w-20 flex flex-row' onClick={handlePreviousPage}
          disabled={page === 1}><ArrowBackIosIcon className='w-8' /> Anterior </button>
        <span>Página  {page} </span>
        <button className='text-black-300 hover:underline w-20 flex flex-row'
          onClick={handleNextPage} disabled={page * resultsPerPage >= filteredSeries.length}>
          Siguiente <NavigateNextIcon className='w-8' /></button>
      </div>
    </Container>
  );
};

export default Series
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import { useState } from "react";

import { visuallyHidden } from '@mui/utils';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import Input from '@mui/joy/Input';
import { IconsContainer, SearchContainer } from './styles';
import { Search } from '@mui/icons-material';
import { TextField, Tooltip } from '@mui/material';
import { useStore } from '../../store/store';
import { DELETE_ARTIST, Data, deleteArtist, searchArtist, sortArtist } from '../../store/musicReducer';
import { ConfirmationDialogRaw } from '../Dialog/dialog-confirmation';
import { Label } from '@bryntum/grid';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@mui/joy';
import { red } from '@mui/material/colors';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'rating',
    numeric: true,
    disablePadding: false,
    label: 'Rating',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
  },
];



interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}


function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const renderSortIcon = (headCell: HeadCell) => {
    if(headCell.id === 'actions') { 
      return (
        <TableSortLabel style={{ borderBottom: 0}} hideSortIcon={true}>
          {headCell.label}
        </TableSortLabel>
      )
    } else {
      return (
        <TableSortLabel
        active={orderBy === headCell.id}
        direction={orderBy === headCell.id ? order : 'asc'}
        onClick={createSortHandler(headCell.id)}
      >
        {headCell.label}
        {orderBy === headCell.id ? (
          <Box component="span" sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
      )
    }


  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {renderSortIcon(headCell)}

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
    </Toolbar>
  );
}



export function TableArtist(props: any) {

  const [state] = useStore();
  const { artists } = state;
  const [, dispatch] = useStore();
  const [query, setQuery] = useState("")
  const [filteredArtists, setFilteredArtists] = useState<Data[]>([]);

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('rating');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('confirmation');
  const [artistToDelete, setArtistToDelete] = React.useState<Data | null>(null);



  React.useEffect(() => {
    filterArtists(query)
  }, [artists])

  let navigate = useNavigate(); 
  const routeChange = (path: string, artist: Data) =>{ 
      navigate(path, {state: artist});
  }

  const handleOnArtistDelete = () => {
    dispatch(deleteArtist(artistToDelete));
  };

  const onDelete = (artist: Data) => {
    setArtistToDelete(artist)
    setOpen(true);
  }

  

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    dispatch(sortArtist({property, order}));
    if(order === 'asc') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
  };

  const handleClickListItem = () => {
    setOpen(true);
  };
  
  const handleClose = (newValue?: string) => {
    setOpen(false);
    if (newValue) {
      handleOnArtistDelete();
    }
  };


  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = artists.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = () => {
    dispatch(searchArtist({query}));
  }

  const handleClickYoutubeIcon = (artist: Data) => {
      window.open(artist.url, '_blank', 'noopener,noreferrer');
  }

  const handleClickEditIcon = (artist: Data) => {
    routeChange('/edit-artist', artist);
  }

  const filterArtists = (query: string) => {
    setQuery(query)
    if(query === '') {
      setFilteredArtists(artists)
    } else {
      setFilteredArtists(artists.filter((artist: Data) => artist.name.toLowerCase().includes(query.toLowerCase())))
    }
  }

  
  // Avoid a layout jump when reaching the last page with empty rows.
  return (
<div>


    <Box sx={{ width: '100%' }}>
      <SearchContainer>
        <div>
          <span>Search</span>
        </div>
        <div>
          <TextField onChange={event => filterArtists(event.target.value)} />
          <Search onClick={() => dispatch(searchArtist({query}))}/>
        </div>

      </SearchContainer>
        <TableContainer>
          <Table
            sx={{ minWidth: 600 }}
            aria-labelledby="tableTitle"
            size={'medium'}
            stickyHeader aria-label="sticky table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={artists.length}
            />
            <TableBody>
            
              {filteredArtists.map((artist: Data, index: any) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={artist.id}
                    sx={{'&.MuiTableRow-root:hover':{
                      background: '#f8f3f9',
                    },
                    cursor: 'pointer',
                  }}
                  >
                    <TableCell
                      component="th"
                      
                      scope="row"
                      padding="normal"
                    >
                      {artist.name}
                    </TableCell>
                    <TableCell align="left">{artist.rating}</TableCell>
                    <TableCell align="left">
                      <IconsContainer>

                      <Tooltip title="Watch Now">
                        <YouTubeIcon onClick={() => handleClickYoutubeIcon(artist)}></YouTubeIcon>
                      </Tooltip>
                        
                      <Tooltip title="Edit">
                        <ModeEditIcon onClick={() => handleClickEditIcon(artist)}></ModeEditIcon>
                      </Tooltip>  
                        
                        <Tooltip title="Delete">
                          <DeleteIcon onClick={() => onDelete(artist)}></DeleteIcon>
                        </Tooltip>
                      </IconsContainer>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>



    </Box>
    <ConfirmationDialogRaw 
      id="confirmation-dialog"
      keepMounted
      open={open}
      onClose={(value) => handleClose(value)}
      value={value}
    />
    </div>
  );
}


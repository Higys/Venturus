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
import { Tooltip } from '@mui/material';
import { useStore } from '../../store/store';
import { DELETE_ARTIST, Data, deleteArtist, sortArtist } from '../../store/musicReducer';
import { ConfirmationDialogRaw } from '../Dialog/dialog-confirmation';
import { Label } from '@bryntum/grid';

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
        <TableCell style={{ borderBottom: 0}}>
          {headCell.label}
        </TableCell>
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



export function TableArtist() {

  const [state] = useStore();
  const { artists } = state;
  const [, dispatch] = useStore();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('rating');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('confirmation');


  const handleOnArtistDelete = (artist: Data) => {
    dispatch(deleteArtist(artist));
  };

  const onDelete = (artist: Data) => {
    setOpen(true);
    // handleOnArtistDelete(artist);
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
  
  const handleClose = (artist: Data, newValue?: string) => {
    setOpen(false);
    console.log(newValue)
    if (newValue) {
      handleOnArtistDelete(artist);
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


  // Avoid a layout jump when reaching the last page with empty rows.
  return (
 
    <Box sx={{ width: '100%' }}>
      <SearchContainer>
        <div>
          <span>Search</span>
        </div>
        <div>
          <Input/>
          <Search/>
        </div>

      </SearchContainer>
        <TableContainer>
          <Table
            sx={{ minWidth: 600 }}
            aria-labelledby="tableTitle"
            size={'medium'}
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
            
              {artists.map((artist: Data, index: any) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={artist.id}
                    sx={{ cursor: 'pointer' }}
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
                        <YouTubeIcon></YouTubeIcon>
                      </Tooltip>
                        
                      <Tooltip title="Edit">
                        <ModeEditIcon></ModeEditIcon>
                      </Tooltip>  
                        
                        <Tooltip title="Delete">
                          <DeleteIcon onClick={() => onDelete(artist)}></DeleteIcon>
                        </Tooltip>
                      </IconsContainer>
                      <Box sx={{ width: '100%', maxWidth: 360}}>
                      <ConfirmationDialogRaw 
          id="confirmation-dialog"
          keepMounted
          open={open}
          onClose={(value) => handleClose(artist, value)}
          value={value}
        />
        </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={artists.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          
        />


    </Box>
  );
}
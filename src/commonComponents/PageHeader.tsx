import React from 'react';
import './../App.css';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';
import logo from './../content/StockholmNetballClubLogo.png';
import logoWhite from './../content/StockholmNetballClubLogoWhite.png';
import { Center, Grid, GridItem } from '@chakra-ui/react';
import { MobileWidth } from './Globals';
import UseWindowSize from './UseWindowSize';

interface PageHeaderProps {
  page: string;
  setPage: (page: string) => void;
}

export default function PageHeader(pageHeaderProps: PageHeaderProps) {

  const { width } = UseWindowSize();
  const isDesktopView = width > MobileWidth;

  if (isDesktopView)
  {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6} className='headerbar'>
            <GridItem colSpan={1}>
                <img src={logo} className='logo' alt='Stockholm Netball Club' />
            </GridItem>
            <GridItem colSpan={4}>
                <NavBar page={pageHeaderProps.page} setPage={pageHeaderProps.setPage}/>
            </GridItem>
        </Grid>
    );
  }
  else 
  {
    return (
        <Grid templateColumns='repeat(4, 1fr)' className='headerdrawer'>
            <GridItem colSpan={1} className='drawerbutton'>
                <NavDrawer page={pageHeaderProps.page} setPage={pageHeaderProps.setPage}/>
            </GridItem>
            <GridItem colSpan={2}>
                <Center>
                    <img src={logoWhite} className='logo' alt='Stockholm Netball Club' />
                </Center>
            </GridItem>
        </Grid>
    );
  }
}

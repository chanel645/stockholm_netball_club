import React from 'react';
import './../../App.css';
// import TitleImage from './Content/TitleImage.jpg'
import {  GridItem, Grid, Text } from '@chakra-ui/react';
import UseWindowSize from '../../commonComponents/UseWindowSize';
import { MobileWidth } from '../../commonComponents/Globals';
import CourseTableWide from './Components/CourseTableWide';
import CourseTableLong from './Components/CourseTableLong';
import PageTitle from '../../commonComponents/PageTitle';
import CourseMap from './Components/CourseMap';

export default function Course() {

  const { width } = UseWindowSize();
  const isDesktopView = width > MobileWidth;

  const mainText = 'COURTS';
  const subText = 'TRAINING AND MATCH PLAY';

  if (isDesktopView)
  {
    return (
      <div> 
        <PageTitle mainText={mainText} subText={subText}/>
        <div className='coursePageContainerDesktop'>
          <div className='courseTextContainerDesktop'>
            <div className='courseTextHeaderDesktop'>
              <Text className='textLargeBold'>COURT MAP</Text>
            </div>
            <div className='courseTextDesktop'>
              <Text className='textLarge'>Stockholm Netball Club offers welcoming netball courts for players of all experience levels. Our club gives the Stockholm community a place to train, compete, and enjoy the game together.</Text>
            </div>
          </div>
          <Grid templateColumns={`repeat(2, 1fr)`} gap={0} rounded="xl" overflow="hidden">
            <GridItem colSpan={1} className='courseMapContainerDesktop'>
              <CourseMap/>
            </GridItem>
            <GridItem colSpan={1}>
                <CourseTableWide/>
            </GridItem>
          </Grid>
        </div>
      </div>
    );
  }
  else 
  {
    return (
      <div> 
        <PageTitle  mainText={mainText} subText={subText}/>
        <div className='coursePageContainerMobile'>
          <div className='courseMapTextContainerMobile'>
            <div className='courseTextHeaderMobile'>
              <Text className='textLargeBold'>COURT MAP</Text>
            </div>
            <div className='courseTextMobile'>
              <Text className='textLarge'>Stockholm Netball Club offers welcoming netball courts for players of all experience levels. Our club gives the Stockholm community a place to train, compete, and enjoy the game together.</Text>
            </div>
          </div>
          <CourseMap/>
          <CourseTableLong/>
        </div>
      </div>
    );
  }

}

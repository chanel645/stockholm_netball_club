import React from 'react';
import './../../App.css';
// import TitleImage from './Content/TitleImage.jpg'
import { Text } from '@chakra-ui/react';
import UseWindowSize from '../../commonComponents/UseWindowSize';
import { MobileWidth } from '../../commonComponents/Globals';
import WhatIsNetballTableLong from './Components/CourseTableLong';
import PageTitle from '../../commonComponents/PageTitle';
import WhatIsNetballMap from './Components/CourseMap';
import positionsImage from './Content/Netball Positions & Court Markings Images.jpg';

export default function WhatIsNetball() {

  const { width } = UseWindowSize();
  const isDesktopView = width > MobileWidth;

  const mainText = 'WHAT IS NETBALL?';
  const historyTitle = 'The history of the game';
  const historyText = (
    <>
      Netball derived from early versions of basketball and began in England in the 1890s. It is most popular in Commonwealth nations, specifically in schools, and is predominantly played by women. According to the INF, netball is played by more than 20 million people in more than 80 countries. In 1995, netball became an International Olympic Committee recognised sport, but it has not yet been played at the Olympic games. If you would like to see Netball at the 2032 Brisbane Olympics, please{' '}
          <a className='pledgeLink' href='https://netball.sport/back-the-bid/' target='_blank' rel='noreferrer'>sign the pledge here</a>.
    </>
  );
  const rulesTitle = 'Rules Of Play';
  const rulesText = 'Rules of Play Netball consists of 14 players allowed on court at any one time. A team may take the court with a minimum of 5 players and maximum of 7. This image shows the 7 positions needed on the court for one team.';

  if (isDesktopView)
  {
    return (
      <div> 
        <PageTitle mainText={mainText}/>
        <div className='whatIsNetballPageContainerDesktop'>
          <div className='whatIsNetballTextContainerDesktop'>
            <div className='whatIsNetballTextHeaderDesktop'>
              <Text className='textLargeBold'>{historyTitle}</Text>
            </div>
            <div className='whatIsNetballTextDesktop'>
              <Text className='textLarge'>{historyText}</Text>
            </div>
          </div>
          <div className='whatIsNetballTextContainerDesktop'>
            <div className='whatIsNetballTextHeaderDesktop'>
              <Text className='textLargeBold'>{rulesTitle}</Text>
            </div>
            <div className='whatIsNetballTextDesktop'>
              <Text className='textLarge'>{rulesText}</Text>
            </div>
            <img className='positionsImage' src={positionsImage} alt='Netball positions and court markings' />
          </div>
        </div>
      </div>
    );
  }
  else 
  {
    return (
      <div> 
        <PageTitle  mainText={mainText}/>
        <div className='whatIsNetballPageContainerMobile'>
          <div className='whatIsNetballMapTextContainerMobile'>
            <div className='whatIsNetballTextHeaderMobile'>
              <Text className='textLargeBold'>{historyTitle}</Text>
            </div>
            <div className='whatIsNetballTextMobile'>
              <Text className='textLarge'>{historyText}</Text>
            </div>
          </div>
          <div className='whatIsNetballMapTextContainerMobile'>
            <div className='whatIsNetballTextHeaderMobile'>
              <Text className='textLargeBold'>{rulesTitle}</Text>
            </div>
            <div className='whatIsNetballTextMobile'>
              <Text className='textLarge'>{rulesText}</Text>
            </div>
            <img className='positionsImage' src={positionsImage} alt='Netball positions and court markings' />
          </div>
          <WhatIsNetballMap/>
          <WhatIsNetballTableLong/>
        </div>
      </div>
    );
  }

}

import React from 'react';
import './../App.css';
import logoWhite from './../content/StockholmNetballClubLogoWhite.png';
import { Text } from '@chakra-ui/react'
import { Center, Grid, GridItem } from '@chakra-ui/react';
import { PhoneIcon, StarIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react';
import { MobileWidth } from './Globals';
import UseWindowSize from './UseWindowSize';


export default function PageFooter() {

    const googleMapUrl = 'https://www.google.com/maps/place/Frescati+Sports+Center/@59.366504,18.0550779,503m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465f9d05cb65a02b:0xba44f59349cadb52!8m2!3d59.366504!4d18.0576528!16s%2Fg%2F119tbccqr?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D';
    const emailAddress = 'stockholmnetballclub@gmail.com';

    const { width } = UseWindowSize();

    if (width > MobileWidth)
    {
      return (
          <div className='footer'>
            <Grid templateColumns='repeat(3, 1fr)' className='footerhorizontalgrid'>     
                <Center>
                  <GridItem colSpan={1}>
                      <Text variant={"semiboldWhite"}>Address	&nbsp;<StarIcon/></Text>
                      <Link variant={"semiboldWhite"} href={googleMapUrl}>Stockholm Netball Club
                        <br></br>Stockholm, Sweden
                      </Link>
                  </GridItem>  
                </Center> 
                <Center>     
                  <GridItem colSpan={1}>
                      <img src={logoWhite} className='footeremblem' alt='Stockholm Netball Club' />
                  </GridItem>   
                </Center>    
                <Center>   
                  <GridItem colSpan={1}>
                      <Text variant={"semiboldWhite"}>Contact	&nbsp;<PhoneIcon/></Text>
                      <Link variant={"semiboldWhite"} href={emailAddress}>{emailAddress}</Link>
                      <Text variant={"semiboldWhite"}>+64 3 303 6301</Text>
                  </GridItem>
                </Center>
            </Grid>
          </div>
      );
  }
  else 
  {
    return (
    <div className='footer'>
      <Grid templateRows='repeat(3, 1fr)' className='footerverticalgrid'>     
          <Center>     
            <GridItem colSpan={1}>
                <img src={logoWhite} className='footeremblem' alt='Stockholm Netball Club' />
            </GridItem>   
          </Center>  
          <Center>
            <GridItem colSpan={1}>
                <Text variant={"semiboldWhite"}>Address	&nbsp;<StarIcon/></Text>
                <Link variant={"semiboldWhite"} href={googleMapUrl}>Stockholm Netball Club
                  <br></br>Stockholm, Sweden
                </Link>
            </GridItem>  
          </Center>   
          <Center>   
            <GridItem colSpan={1}>
                <Text variant={"semiboldWhite"}>Contact	&nbsp;<PhoneIcon/></Text>
                <Link variant={"semiboldWhite"} href={emailAddress}>{emailAddress}</Link>
                <Text variant={"semiboldWhite"}>+64 3 303 6301</Text>
            </GridItem>
          </Center>
      </Grid>
    </div>
    );
  }
}

import React from 'react';
import './../../App.css';
// import slide1 from './Content/Slides/Slide1.jpg';
// import slide2 from './Content/Slides/Slide2.jpg';
// import slide3 from './Content/Slides/Slide3.jpg';
// import slide4 from './Content/Slides/Slide4.jpg';
// import slide5 from './Content/Slides/Slide5.jpg';
// import image1 from './Content/Image1.jpg';
// import image2 from './Content/Image2.jpg';
// import emblem from './../../Content/StockholmNetballClubEmblem.png';
import UseWindowSize from '../../commonComponents/UseWindowSize';
import { MobileWidth, GoogleApiKey } from '../../commonComponents/Globals';
// import { Slide } from 'react-slideshow-image';
import { Grid, GridItem, Text, Card, CardHeader, CardBody, Stack, Flex, Divider, CardFooter } from '@chakra-ui/react';
import 'react-slideshow-image/dist/styles.css';

// const slides = [slide1, slide2, slide4, slide5];

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, children, className }) => (
  <div className={className}>
    <div className='homeTextContainerCenter'>
      <Text className='textLargeBold'>{title}</Text>
    </div>
    <div className='whatIsNetballTextMobile'>
      <Text className='textLarge'>{children}</Text>
    </div>
  </div>
);

export default function Home() {
  const { width } = UseWindowSize();
  const isDesktopView = width > MobileWidth;

  const containerClass = isDesktopView ? 'homeTextContainerDesktop' : 'homeTextContainerMobile';

  // const slideShow = (
  //   <div className='slideShowContainer'>
  //     <img src={emblem} className='slideShowEmblem' />
  //     <Slide duration={5000} arrows={false} canSwipe={false} pauseOnHover={false} cssClass='slideShow'>
  //       {slides.map((slide, index) => (
  //         <div className='each-slide-effect' key={index}>
  //           <img src={slide} className='slideShowImage' />
  //         </div>
  //       ))}
  //     </Slide>
  //   </div>
  // );

  const introSection = (
    <ContentSection title='A WELCOMING NETBALL CLUB IN STOCKHOLM' className={containerClass}>
      Stockholm Netball Club is a friendly and inclusive community club in the heart of Stockholm.
      Our welcoming club offers year-round sessions for all genders, a relaxed atmosphere, and a place
      for players of all experience levels to enjoy the game and connect with others.
    </ContentSection>
  );

const clubFeesSection = (
  <Card className='clubFeesCard'>
    <CardHeader display='flex' justifyContent='center'>
      <Text className='textLargeBold'>CLUB FEES AND MEMBERSHIPS</Text>
    </CardHeader>
    <CardBody pt={0}>
      <Stack spacing={2}>
        <Flex justify='space-between'>
          <Text className='textLarge'>First session free to come try out the game!</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text className='textLarge'>6 month seasons - Seasonal membership available</Text>
        </Flex>
        <Divider />
        <Flex justify='space-between'>
          <Text className='textLarge'>Drop in fee available for one-off sessions</Text>
        </Flex>
        <Divider />
        <Flex justify='space-between'>
          <Text className='textLarge'>Discounted membership for students and the unemployed</Text>
        </Flex>
        <Divider />
      </Stack>
    </CardBody>
    <CardFooter display='flex' justifyContent='center' pt={0}>
      <Stack spacing={2} textAlign='center'>
        <Text className='textLarge'>Please contact the club for membership information, current sessions and payment details.</Text>
      </Stack>
    </CardFooter>
  </Card>
);

const membershipSection = (
  <><Card className='membershipCard'>
    <CardHeader display='flex' justifyContent='center'>
      <Text className='textLargeBold'>Socials</Text>
    </CardHeader>
    <CardBody pt={0}>
      <div className='socialEmbeds'>
        <div className='socialEmbedItem instagramEmbedItem'>
          <iframe
            className='instagramEmbed'
            title='Stockholm Netball Club Instagram profile'
            src='https://www.instagram.com/stockholmnetballclub/embed'
            loading='lazy'
            allow='encrypted-media'
            scrolling='no'
          />
        </div>
        <div className='socialEmbedItem'>
          <div className='facebookProfile'>
            <div className='facebookProfileMark' aria-hidden='true'>f</div>
            <Text className='facebookProfileTitle'>Stockholm Netball Club</Text>
            <Text className='facebookProfileText'>Follow the club on Facebook for updates, events and news.</Text>
            <a
              className='facebookProfileLink'
              href='https://www.facebook.com/p/Stockholm-Netball-Club-100057617876055/'
              target='_blank'
              rel='noreferrer'
            >
              Visit us on Facebook
            </a>
          </div>
        </div>
      </div>
  </CardBody>
  {/* <CardFooter display='flex' justifyContent='center' pt={0}>
      <Stack spacing={2} textAlign='center'>
        <Text className='textMedium'>Please contact us for more information regarding memberships.</Text>
      </Stack>
    </CardFooter> */}
  </Card></>
);

  const locationSection = (
    <Card className='locationCard'>
      <CardHeader display='flex' justifyContent='center'>
        <Text className='textLargeBold'>WHERE TO FIND US</Text>
      </CardHeader>
      <CardBody pt={0} textAlign='center'>
        <Text className='textLarge'>
          Stockholm Netball Club is based in central Stockholm, Sweden.
          <br />
          <br />
          Tuesday sessions are held at Frescati Sports Center
          <br />
          and Sunday sessions are held at GIH-badet outdoor courts.
        </Text>
      </CardBody>
    </Card>
  );

  const googleMap = (
    <iframe
      className='googleMap'
      title='Stockholm Netball Club location map'
      src={`https://www.google.com/maps/embed/v1/place?key=${GoogleApiKey}&q=place_id:ChIJK6BlywWdX0YRUtvKSZP1RLo`}
    />
  );

  return (
    <div>
      {/* Replacement homepage slideshow goes here. */}
      {isDesktopView ? (
        <div className='homePageContainerDesktop'>
          {introSection}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Grid templateColumns='1fr' gap={6}>
              <GridItem colSpan={1} display='flex'>
                {locationSection}
              </GridItem>
              <GridItem colSpan={1} display='flex'>
                {clubFeesSection}
              </GridItem>
              <GridItem colSpan={1} display='flex'>
                {membershipSection}
              </GridItem>
            </Grid>
          </div>
        </div>
      ) : (
        <div className='homePageContainerMobile'>
          {introSection}
          {locationSection}
          {clubFeesSection}
          {membershipSection}
        </div>
      )}
      {googleMap}
    </div>
  );
}
import React from 'react';
import './../App.css';
import { 
  Tabs, 
  TabList, 
  Tab, 
} from '@chakra-ui/react'

interface NavBarProps {
  page: string;
  setPage: (page: string) => void;
}

const pagesMap: Map<number, string> = new Map([
  [0, "home"]
  ,[1, "whatIsNetball"]
  ,[2, "membershipInfo"]
  // ,[3, "contact"]
]);

export default function NavBar(navBarProps: NavBarProps) {

  const [tabIndex, setTabIndex] = React.useState(0)

  const getByValue = (map: Map<number, string>, searchValue: string) => {
    for (let index = 0; index < map.size; index++) {
      const value = map.get(index);
      
      if (value === searchValue)
      {
        return index;
      }
    }
    return 0;
  }

  React.useEffect(() => {
    const startIndex = getByValue(pagesMap, navBarProps.page) ?? 0;
    setTabIndex(startIndex);
  }, [navBarProps.page]);

  const handleTabsChange = (index: number) => {
    navBarProps.setPage(pagesMap.get(index) ?? "home")
    setTabIndex(index)
  }

  return (
    <div className='navbar'>
      <Tabs colorScheme='coreTheme' index={tabIndex} size='lg' align='center' isFitted onChange={(index) => handleTabsChange(index)}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>What is Netball?</Tab>
          <Tab>Membership Info</Tab>
          {/* <Tab>Contact</Tab>           */}
        </TabList>
      </Tabs>
    </div>
  );
}

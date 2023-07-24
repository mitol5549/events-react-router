import { Outlet /* useNavigation */ } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventsLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <EventsNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default EventsLayout;

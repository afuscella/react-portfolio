import HomeScreen from '@/components/screen/HomeScreen';
import { websitePageHOC } from '@/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {},
});

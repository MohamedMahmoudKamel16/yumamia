import { div } from '../builder';
import sidebar from './sidebar';
import mainArea from './mainArea';

export default function app(store) {
  const sidebarElem  = sidebar(store);
  const mainAreaElem = mainArea(store);

  const container = div(sidebarElem, mainAreaElem);
  return container;
}

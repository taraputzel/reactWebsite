import data from '@uiw/react-overlay-trigger/README.md';
import Markdown from '../../../components/Markdown/Markdown';

export default function Page() {
  return (
    <Markdown {...data} path="https://github.com/uiwjs/uiw/tree/master/packages/react-overlay-trigger/README.md" />
  );
}

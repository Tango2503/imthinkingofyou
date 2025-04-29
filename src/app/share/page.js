import { Suspense } from 'react';
import SharePage from './ShareClient';

export default function Page() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <SharePage />
    </Suspense>
  );
}

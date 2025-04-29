import { Suspense } from 'react';
import Receiver from './ReceiverClient';

export default function Page() {
  return (
    <Suspense fallback={<p className="text-lg p-12 text-center"> retrieving... 🌱</p>}>
      <Receiver />
    </Suspense>
  );
}

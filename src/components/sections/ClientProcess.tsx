import { ClientBaseSection } from './ClientBaseSection';
import { ProcessSection } from './ProcessSection';

interface ClientProcessProps {
  includeProcess?: boolean;
}

export function ClientProcess({ includeProcess = true }: ClientProcessProps) {
  return (
    <div className="client-process">
      <ClientBaseSection />
      {includeProcess && <ProcessSection />}
    </div>
  );
}

import PricingTable from './PricingTable';
import  "./App.css";
import PricingTablePersian from './PricingTablePersian';
export default function App() {
  return (
    <div>
    <div className="min-h-screen bg-gray-50">
      <PricingTable />
    </div>
    <div className="min-h-screen bg-gray-50">
      <PricingTablePersian />
    </div>
    </div>
  );
}

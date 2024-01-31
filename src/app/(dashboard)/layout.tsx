
import Sidebar from '../../components/shared/Sidebar';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="min-h-[calc(100vh-64px)]">
            <Sidebar>{children}</Sidebar>
        </div>
    );
};

export default DashboardLayout;
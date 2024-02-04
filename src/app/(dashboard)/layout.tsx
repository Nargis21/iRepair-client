
import { getServerSession } from 'next-auth';
import Sidebar from '../../components/shared/Sidebar';
import { authOptions } from '@/utils/authOptions';
import { TSession } from '@/types/globalTypes';


const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const { role } = await getServerSession(authOptions) as TSession

    return (
        <div className="min-h-[calc(100vh-64px)]">
            <Sidebar role={role}>{children}</Sidebar>
        </div>
    );
};

export default DashboardLayout;
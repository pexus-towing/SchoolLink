import React, { useState } from 'react';
import Splash from './pages/Splash';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ParentRegistration from './pages/ParentRegistration';
import LinkageConfirmation from './pages/LinkageConfirmation';
import RoleSelection from './pages/RoleSelection';
import LegalPolicies from './pages/LegalPolicies';
import SupportDashboard from './pages/SupportDashboard';
import ParentDashboard from './pages/ParentDashboard';
import ChildSwitcher from './pages/ChildSwitcher';
import AttendanceParentView from './pages/AttendanceParentView';
import GradesParentView from './pages/GradesParentView';
import HomeworkParentView from './pages/HomeworkParentView';
import AnnouncementsParentView from './pages/AnnouncementsParentView';
import AnnouncementDetailParentView from './pages/AnnouncementDetailParentView';
import ParentProfile from './pages/ParentProfile';
import NotificationsInbox from './pages/NotificationsInbox';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherClassSelector from './pages/TeacherClassSelector';
import TeacherAttendanceMarking from './pages/TeacherAttendanceMarking';
import TeacherAttendanceHistory from './pages/TeacherAttendanceHistory';
import TeacherGradeEntry from './pages/TeacherGradeEntry';
import TeacherGradeHistory from './pages/TeacherGradeHistory';
import TeacherHomeworkPosting from './pages/TeacherHomeworkPosting';
import TeacherHomeworkList from './pages/TeacherHomeworkList';
import TeacherAnnouncementPosting from './pages/TeacherAnnouncementPosting';
import TeacherClassRoster from './pages/TeacherClassRoster';
import TeacherProfile from './pages/TeacherProfile';
import AdminDashboard from './pages/AdminDashboard';
import Sitemap from './pages/Sitemap';
import { Map } from 'lucide-react';

export default function App() {
    const [route, setRoute] = useState('splash');

    const renderRoute = () => {
        switch (route) {
            case 'splash': return <Splash navigate={setRoute} />;
            case 'login': return <Login navigate={setRoute} />;
            case 'forgot_password': return <ForgotPassword navigate={setRoute} />;
            case 'reset_password': return <ResetPassword navigate={setRoute} />;
            case 'parent_registration': return <ParentRegistration navigate={setRoute} />;
            case 'linkage_confirmation': return <LinkageConfirmation navigate={setRoute} />;
            case 'role_selection': return <RoleSelection navigate={setRoute} />;
            case 'legal': return <LegalPolicies navigate={setRoute} />;
            case 'dashboard': return <SupportDashboard navigate={setRoute} />;
            case 'parent_dashboard': return <ParentDashboard navigate={setRoute} />;
            case 'child_switcher': return <ChildSwitcher navigate={setRoute} />;
            case 'attendance_parent': return <AttendanceParentView navigate={setRoute} />;
            case 'grades_parent': return <GradesParentView navigate={setRoute} />;
            case 'homework_parent': return <HomeworkParentView navigate={setRoute} />;
            case 'announcements_parent': return <AnnouncementsParentView navigate={setRoute} />;
            case 'announcement_detail': return <AnnouncementDetailParentView navigate={setRoute} />;
            case 'parent_profile': return <ParentProfile navigate={setRoute} />;
            case 'notifications_inbox': return <NotificationsInbox navigate={setRoute} />;
            case 'teacher_dashboard': return <TeacherDashboard navigate={setRoute} />;
            case 'teacher_classes': return <TeacherClassSelector navigate={setRoute} />;
            case 'teacher_attendance': return <TeacherAttendanceMarking navigate={setRoute} />;
            case 'teacher_attendance_history': return <TeacherAttendanceHistory navigate={setRoute} />;
            case 'teacher_grades_entry': return <TeacherGradeEntry navigate={setRoute} />;
            case 'teacher_grade_history': return <TeacherGradeHistory navigate={setRoute} />;
            case 'teacher_homework_list': return <TeacherHomeworkList navigate={setRoute} />;
            case 'teacher_homework': return <TeacherHomeworkPosting navigate={setRoute} />;
            case 'teacher_announcement': return <TeacherAnnouncementPosting navigate={setRoute} />;
            case 'teacher_roster': return <TeacherClassRoster navigate={setRoute} />;
            case 'teacher_profile': return <TeacherProfile navigate={setRoute} />;
            case 'admin_dashboard': return <AdminDashboard navigate={setRoute} />;
            case 'sitemap': return <Sitemap navigate={setRoute} />;
            default: return <Splash navigate={setRoute} />;
        }
    };

    return renderRoute();
}

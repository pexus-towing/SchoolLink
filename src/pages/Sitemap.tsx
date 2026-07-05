import React from 'react';
import { Map, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Sitemap({ navigate }: { navigate: (path: string) => void }) {
    const pages = [
        { path: 'splash', name: 'Splash Screen', description: 'Initial loading and welcome screen.' },
        { path: 'login', name: 'Login', description: 'Authentication page for all users.' },
        { path: 'forgot_password', name: 'Forgot Password', description: 'Password recovery initiation.' },
        { path: 'reset_password', name: 'Reset Password', description: 'Password reset confirmation.' },
        { path: 'parent_registration', name: 'Parent Registration', description: 'Account creation for parents.' },
        { path: 'linkage_confirmation', name: 'Linkage Confirmation', description: 'Confirm student profile linkage.' },
        { path: 'role_selection', name: 'Role Selection', description: 'Choose dashboard (Parent/Admin).' },
        { path: 'dashboard', name: 'Support / Admin Dashboard', description: 'Administrative portal.' },
        { path: 'parent_dashboard', name: 'Parent Dashboard', description: 'Parent view for student tracking.' },
        { path: 'child_switcher', name: 'Child Switcher', description: 'Select which child profile to view.' },
        { path: 'attendance_parent', name: 'Attendance Record', description: 'View student attendance history.' },
        { path: 'grades_parent', name: 'Grades & Academics', description: 'View student assessment scores and comments.' },
        { path: 'homework_parent', name: 'Homework & Assignments', description: 'View and track student homework.' },
        { path: 'announcements_parent', name: 'Announcements Feed', description: 'Chronological feed of school announcements.' },
        { path: 'announcement_detail', name: 'Announcement Detail', description: 'Full view of a single announcement and attachments.' },
        { path: 'notifications_inbox', name: 'Notifications / Inbox', description: 'List of recent alerts and updates.' },
        { path: 'parent_profile', name: 'Parent Profile', description: 'View parent account details and linked children.' },
        { path: 'teacher_dashboard', name: 'Teacher Dashboard', description: 'Home view for teachers showing classes and quick actions.' },
        { path: 'teacher_classes', name: 'Class Selector', description: 'Select a class to manage as a teacher.' },
        { path: 'teacher_attendance', name: 'Attendance Marking', description: 'Mark student attendance for a selected class.' },
        { path: 'teacher_attendance_history', name: 'Attendance History', description: 'View and correct past attendance records.' },
        { path: 'teacher_grades_entry', name: 'Grade Entry', description: 'Enter scores and comments for an assessment.' },
        { path: 'teacher_grade_history', name: 'Grade History', description: 'View past assessment scores and statistics.' },
        { path: 'teacher_homework_list', name: 'Homework List', description: 'View and manage assigned homework.' },
        { path: 'teacher_homework', name: 'Post Homework', description: 'Create and assign homework to a class.' },
        { path: 'teacher_announcement', name: 'Post Announcement', description: 'Create and post announcements to classes.' },
        { path: 'teacher_roster', name: 'Class Roster', description: 'View student list and parent contact information.' },
        { path: 'teacher_profile', name: 'Teacher Profile', description: 'View and edit profile information and settings.' },
        { path: 'admin_dashboard', name: 'Admin Dashboard', description: 'Overview of school statistics and quick links for administrators.' },
        { path: 'legal', name: 'Legal & Policies', description: 'Terms of Service and Privacy Policy.' },
    ];

    return (
        <div className="bg-[#F7F8FA] min-h-screen text-[#1F3864] p-6 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#1F3864] text-white p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Map className="w-8 h-8" />
                            <h1 className="text-3xl font-bold">Site Map</h1>
                        </div>
                        <button 
                            onClick={() => navigate('splash')}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors font-semibold"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to App
                        </button>
                    </div>
                    <p className="mt-4 text-blue-100 max-w-lg text-sm">
                        Complete directory of all available pages within the SchoolLink application. Use these links to navigate directly to any section for testing and review.
                    </p>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pages.map((page) => (
                            <button
                                key={page.path}
                                onClick={() => navigate(page.path)}
                                className="flex flex-col items-start p-4 border border-gray-200 rounded-lg hover:border-[#1F3864] hover:shadow-md transition-all group text-left bg-white"
                            >
                                <div className="flex items-center justify-between w-full mb-2">
                                    <h3 className="text-lg font-bold text-[#1F3864]">{page.name}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F3864] transition-colors" />
                                </div>
                                <p className="text-sm text-gray-500">{page.description}</p>
                                <div className="mt-3 text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    Path: {page.path}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

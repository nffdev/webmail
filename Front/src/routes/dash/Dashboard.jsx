import React from 'react';
import { useAuth } from "@/lib/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Dashboard() {
    const { user } = useAuth();
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const emails = [
        {
            id: 1,
            from: "john.doe@example.com",
            subject: "Meeting Tomorrow",
            preview: "Hi, just wanted to confirm our meeting tomorrow at 2 PM...",
            time: "2h ago",
            read: false
        },
        {
            id: 2,
            from: "sarah.wilson@company.com",
            subject: "Project Update",
            preview: "The latest project milestone has been completed successfully...",
            time: "4h ago",
            read: true
        },
        {
            id: 3,
            from: "notifications@service.com",
            subject: "Your monthly report is ready",
            preview: "Your analytics report for this month is now available for download...",
            time: "1d ago",
            read: true
        },
        {
            id: 4,
            from: "team@startup.io",
            subject: "Welcome to the team!",
            preview: "We're excited to have you join our growing team. Here's what you need to know...",
            time: "2d ago",
            read: false
        }
    ];

    const filteredEmails = emails.filter(email => 
        email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.from.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">Webmail</h1>
                            <p className="text-sm text-gray-400">{user.username}</p>
                        </div>
                    </div>
                </div>
                
                <nav className="flex-1 p-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Inbox
                        <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded-full">
                            {emails.filter(e => !e.read).length}
                        </span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Sent
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Drafts
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8.707 5.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Trash
                    </Button>
                </nav>
                
                <div className="p-4 border-t border-gray-800">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Compose
                    </Button>
                </div>
            </div>

            {/* Email List */}
            <div className="w-96 bg-gray-900 border-r border-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-800">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <Input 
                            placeholder="Search emails..." 
                            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                    {filteredEmails.map((email) => (
                        <div 
                            key={email.id}
                            className={`p-4 border-b border-gray-800 cursor-pointer transition-colors hover:bg-gray-800 ${
                                selectedEmail?.id === email.id ? 'bg-gray-800 border-l-4 border-l-blue-500' : ''
                            }`}
                            onClick={() => setSelectedEmail(email)}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                    <div className={`w-2 h-2 rounded-full ${email.read ? 'bg-gray-600' : 'bg-blue-500'}`} />
                                    <span className="text-sm font-medium text-gray-300 truncate">{email.from}</span>
                                </div>
                                <span className="text-xs text-gray-500">{email.time}</span>
                            </div>
                            <h3 className={`text-sm mb-1 truncate ${email.read ? 'text-gray-300' : 'text-white font-medium'}`}>
                                {email.subject}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-2">{email.preview}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Email Content */}
            <div className="flex-1 flex flex-col bg-gray-950">
                {selectedEmail ? (
                    <>
                        <div className="p-6 border-b border-gray-800">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-xl font-semibold">{selectedEmail.subject}</h1>
                                <div className="flex space-x-2">
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8.707 5.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>From: <span className="text-white">{selectedEmail.from}</span></span>
                                <span>•</span>
                                <span>{selectedEmail.time}</span>
                            </div>
                        </div>
                        
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed">
                                    {selectedEmail.preview}
                                </p>
                                <br />
                                <p className="text-gray-300 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <br />
                                <p className="text-gray-300 leading-relaxed">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <br />
                                <p className="text-gray-300 leading-relaxed">
                                    Best regards,<br />
                                    {selectedEmail.from.split('@')[0]}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <h3 className="text-lg font-medium text-gray-400 mb-2">Select an email</h3>
                            <p className="text-gray-500">Choose an email from the list to view its content</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
